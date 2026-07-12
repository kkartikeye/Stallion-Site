type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  max?: number;
  windowMs?: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterMs: number;
};

const DEFAULT_MAX = 5;
const DEFAULT_WINDOW_MS = 60_000;

// In-memory store. This protects a single warm instance from bursts of abuse
// with zero dependencies. On multi-instance / serverless deployments it is
// best-effort — move to a shared store (e.g. Upstash/Redis) for hard limits.
const store = new Map<string, RateLimitEntry>();

function prune(now: number) {
  for (const [key, entry] of store) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const max = options.max ?? DEFAULT_MAX;
  const windowMs = options.windowMs ?? DEFAULT_WINDOW_MS;
  const now = Date.now();

  // Opportunistic cleanup so the map cannot grow unbounded.
  if (store.size > 5_000) {
    prune(now);
  }

  const entry = store.get(key);

  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1, retryAfterMs: 0 };
  }

  if (entry.count >= max) {
    return { allowed: false, remaining: 0, retryAfterMs: entry.resetAt - now };
  }

  entry.count += 1;
  return { allowed: true, remaining: max - entry.count, retryAfterMs: 0 };
}
