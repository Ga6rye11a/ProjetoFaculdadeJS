// Fallback simples para cache em memória.
// Objetivo: evitar que a API quebre caso o Redis não esteja instalado/configurado.

const store = new Map();

function getNow() {
  return Date.now();
}

async function get(key) {
  const entry = store.get(key);
  if (!entry) return null;

  if (entry.expiresAt && entry.expiresAt <= getNow()) {
    store.delete(key);
    return null;
  }

  return entry.value;
}

async function setEx(key, ttlSeconds, value) {
  const expiresAt = ttlSeconds ? getNow() + ttlSeconds * 1000 : null;
  store.set(key, { value, expiresAt });
}

async function del(key) {
  store.delete(key);
}

export const redisClient = {
  get,
  setEx,
  del,
};

