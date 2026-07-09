const fs = require("node:fs");
const path = require("node:path");

if (!process.env.VERCEL) {
  const envPath = path.join(process.cwd(), ".env.production");

  if (fs.existsSync(envPath)) {
    require("dotenv").config({ path: envPath });
  }
}

const requiredEnv = ["CHORN_DATA_URL", "CONTENT_API_KEY"];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.error(
    [
      "Missing required build environment variables:",
      ...missingEnv.map((key) => `- ${key}`),
      "",
      "Configure these variables in Vercel Project Settings > Environment Variables for Production, Preview, and Development as needed.",
      "Local .env.* files are not available during Vercel builds unless the values are also configured in Vercel.",
    ].join("\n"),
  );
  process.exit(1);
}
