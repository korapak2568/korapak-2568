const CHORN_DATA_REVALIDATE_SECONDS = 31_536_000;
const CHORN_DATA_REVALIDATE_MS = CHORN_DATA_REVALIDATE_SECONDS * 1000;
const CHORN_DATA_FETCH_ATTEMPTS = 3;

type CachedFetchData = {
  expiresAt: number;
  value: unknown;
};

const fetchDataCache = new Map<string, Promise<CachedFetchData>>();

function getChornDataConfig() {
  const baseUrl = process.env.CHORN_DATA_URL;
  const apiKey = process.env.CONTENT_API_KEY;

  if (!baseUrl) {
    throw new Error("CHORN_DATA_URL is not configured.");
  }

  if (!apiKey) {
    throw new Error("CONTENT_API_KEY is not configured.");
  }

  return {
    baseUrl,
    apiKey,
  };
}

function normalizeJsonPath(jsonPath: string): string {
  const objectKey = jsonPath.trim().replace(/^\/+/, "");

  if (!objectKey || objectKey.endsWith("/")) {
    throw new Error("A JSON file path is required.");
  }

  if (!objectKey.endsWith(".json")) {
    throw new Error(`Only JSON files are supported: ${jsonPath}`);
  }

  return objectKey;
}

function buildChornDataUrl(baseUrl: string, objectKey: string): string {
  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  return new URL(objectKey, normalizedBaseUrl).toString();
}

function shouldRetryResponse(response: Response): boolean {
  return response.status === 429 || response.status >= 500;
}

function isFetchDataHttpError(error: unknown): boolean {
  return error instanceof Error && error.message.startsWith("Failed to fetch ");
}

function getRetryDelay(attempt: number): number {
  return 250 * 2 ** attempt;
}

async function waitForRetry(attempt: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, getRetryDelay(attempt)));
}

async function fetchJsonFromChornData(objectKey: string): Promise<CachedFetchData> {
  const { baseUrl, apiKey } = getChornDataConfig();
  const dataUrl = buildChornDataUrl(baseUrl, objectKey);
  let lastError: unknown;

  for (let attempt = 0; attempt < CHORN_DATA_FETCH_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(dataUrl, {
        headers: {
          "x-api-key": apiKey,
        },
      });

      if (!response.ok) {
        if (attempt < CHORN_DATA_FETCH_ATTEMPTS - 1 && shouldRetryResponse(response)) {
          await waitForRetry(attempt);
          continue;
        }

        throw new Error(
          `Failed to fetch ${objectKey}: ${response.status} ${response.statusText}`,
        );
      }

      return {
        expiresAt: Date.now() + CHORN_DATA_REVALIDATE_MS,
        value: await response.json(),
      };
    } catch (error) {
      lastError = error;

      if (isFetchDataHttpError(error) || attempt >= CHORN_DATA_FETCH_ATTEMPTS - 1) {
        break;
      }

      await waitForRetry(attempt);
    }
  }

  throw lastError;
}

export function clearFetchDataCache(jsonPath?: string): void {
  if (!jsonPath) {
    fetchDataCache.clear();
    return;
  }

  fetchDataCache.delete(normalizeJsonPath(jsonPath));
}

export async function fetchData<T = unknown>(jsonPath: string): Promise<T> {
  const objectKey = normalizeJsonPath(jsonPath);
  const cached = fetchDataCache.get(objectKey);

  if (cached) {
    const cachedData = await cached;

    if (cachedData.expiresAt > Date.now()) {
      return cachedData.value as T;
    }

    fetchDataCache.delete(objectKey);
  }

  const dataPromise = fetchJsonFromChornData(objectKey).catch((error) => {
    fetchDataCache.delete(objectKey);
    throw error;
  });
  fetchDataCache.set(objectKey, dataPromise);

  return (await dataPromise).value as T;
}