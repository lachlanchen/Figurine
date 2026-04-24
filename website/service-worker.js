const CACHE_NAME = "lazyingart-figurine-v2";
const ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/script.js",
  "/stripe-config.js",
  "/manifest.webmanifest",
  "/assets/brand/lazyingart-icon.png",
  "/assets/brand/lazyingart-logo.png",
  "/assets/brand/lazyingart-pwa-192.png",
  "/assets/brand/lazyingart-pwa-512.png",
  "/assets/products/patchwork-leather-notebook/patchwork-leather-notebook-luxury-clean-v2.jpg",
  "/assets/products/lala-chan-panda-doll/lala-chan-panda-doll-product-v1.webp",
  "/assets/products/lala-chan-panda-doll/lala-chan-panda-doll-lifestyle-friends-v1.webp",
  "/assets/products/lala-chan-panda-doll/lala-chan-panda-doll-lifestyle-alone-v1.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);
  const networkFirst = ["/", "/index.html", "/stripe-config.js"].includes(url.pathname);

  if (networkFirst) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type !== "opaque") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
