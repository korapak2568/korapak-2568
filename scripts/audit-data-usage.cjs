const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const dataRoot = path.join(projectRoot, 'data');
const sourceRoots = [
    path.join(projectRoot, 'src', 'app'),
    path.join(projectRoot, 'src', 'components'),
    path.join(projectRoot, 'src', 'lib'),
    path.join(projectRoot, 'src', 'metadata'),
    path.join(projectRoot, 'server'),
];

const extensions = ['.ts', '.tsx', '.js', '.jsx'];
const importPattern = /(?:import\s+(?:type\s+)?[\s\S]*?\s+from\s+|import\s*\(|export\s+[\s\S]*?\s+from\s+)\s*["']([^"']+)["']/g;

function toPosix(relativePath) {
    return relativePath.split(path.sep).join('/');
}

function walkFiles(directory, predicate = () => true) {
    if (!fs.existsSync(directory)) {
        return [];
    }

    const results = [];
    for (const entry of fs.readdirSync(directory, {withFileTypes: true})) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            results.push(...walkFiles(fullPath, predicate));
        } else if (predicate(fullPath)) {
            results.push(fullPath);
        }
    }
    return results;
}

function isSourceFile(filePath) {
    return extensions.includes(path.extname(filePath));
}

function resolveFile(basePath) {
    if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) {
        return basePath;
    }

    for (const extension of extensions) {
        const candidate = `${basePath}${extension}`;
        if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
            return candidate;
        }
    }

    if (fs.existsSync(basePath) && fs.statSync(basePath).isDirectory()) {
        for (const extension of extensions) {
            const candidate = path.join(basePath, `index${extension}`);
            if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
                return candidate;
            }
        }
    }

    return null;
}

function resolveImport(fromFile, specifier) {
    if (specifier.startsWith('@/')) {
        const subPath = specifier.slice(2);
        if (subPath.startsWith('data/')) {
            return resolveFile(path.join(projectRoot, subPath));
        }

        for (const root of ['src', 'server', 'backend']) {
            const resolved = resolveFile(path.join(projectRoot, root, subPath));
            if (resolved) {
                return resolved;
            }
        }
        return null;
    }

    if (specifier.startsWith('.')) {
        return resolveFile(path.resolve(path.dirname(fromFile), specifier));
    }

    return null;
}

function getImports(filePath) {
    const source = fs.readFileSync(filePath, 'utf8');
    const imports = [];
    let match;

    importPattern.lastIndex = 0;
    while ((match = importPattern.exec(source)) !== null) {
        const resolved = resolveImport(filePath, match[1]);
        if (resolved && isSourceFile(resolved)) {
            imports.push(resolved);
        }
    }

    return imports;
}

function traceReachable(entryFiles) {
    const visited = new Set();
    const stack = [...entryFiles];

    while (stack.length > 0) {
        const filePath = stack.pop();
        if (!filePath || visited.has(filePath)) {
            continue;
        }

        visited.add(filePath);
        for (const imported of getImports(filePath)) {
            if (!visited.has(imported)) {
                stack.push(imported);
            }
        }
    }

    return visited;
}

function classifyDataFile(filePath) {
    const relative = toPosix(path.relative(projectRoot, filePath));
    const parts = relative.split('/');
    const isModel = parts.includes('model') || parts.includes('_model');
    const isHardcodeData = !isModel;
    return {relative, isModel, isHardcodeData};
}

function formatLog(title, entries, summary) {
    const lines = [
        `# ${title}`,
        `Generated: ${new Date().toISOString()}`,
        '',
        `Total: ${entries.length}`,
        `Model/type files: ${summary.model}`,
        `Hardcode data files: ${summary.hardcode}`,
        '',
    ];

    for (const entry of entries) {
        lines.push(`${entry.relative} | ${entry.isModel ? 'kind=model' : 'kind=hardcode-data'}`);
    }

    lines.push('');
    return lines.join('\n');
}

function summarize(entries) {
    return {
        model: entries.filter((entry) => entry.isModel).length,
        hardcode: entries.filter((entry) => entry.isHardcodeData).length,
    };
}

function main() {
    const entryFiles = sourceRoots.flatMap((root) =>
        walkFiles(root, (filePath) => isSourceFile(filePath) && !filePath.startsWith(dataRoot))
    );
    const reachableFiles = traceReachable(entryFiles);
    const dataFiles = walkFiles(dataRoot, isSourceFile).sort((a, b) => a.localeCompare(b));
    const entries = dataFiles.map((filePath) => ({
        ...classifyDataFile(filePath),
        active: reachableFiles.has(filePath),
    }));

    const active = entries.filter((entry) => entry.active);
    const inactive = entries.filter((entry) => !entry.active);

    fs.writeFileSync(
        path.join(projectRoot, 'hardcode-data-active.log'),
        formatLog('Active data files reachable from runtime source', active, summarize(active)),
        'utf8'
    );

    fs.writeFileSync(
        path.join(projectRoot, 'hardcode-data-inactive.log'),
        formatLog('Inactive data files not reachable from runtime source', inactive, summarize(inactive)),
        'utf8'
    );

    console.log(JSON.stringify({
        entries: entryFiles.length,
        dataFiles: entries.length,
        active: active.length,
        inactive: inactive.length,
        activeHardcode: summarize(active).hardcode,
        inactiveHardcode: summarize(inactive).hardcode,
        activeModel: summarize(active).model,
        inactiveModel: summarize(inactive).model,
    }, null, 2));
}

main();
