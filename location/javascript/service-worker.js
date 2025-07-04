const CACHE_NAME = "location-app-v1";
const urlsToCache = [
  "index.html",
  "/style/style.css",
  "/style/jquery.css",
  "/json/manifest.json",
  "/javascript/jquery.js",
  "/javascript/jsdelivr.js",
  "/javascript/script.js",
  "/javascript/data.js",
  "/javascript/app.js",
  "/javascript/service-worker.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
