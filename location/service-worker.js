const CACHE_NAME = "location-app-v1";
const urlsToCache = [
  "index.html",
  "style.css",
  "jquery.css",
  "manifest.json",
  "jquery.js",
  "jsdelivr.js",
  "script.js",
  "data.js",
  "app.js",
  "service-worker.js"
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
