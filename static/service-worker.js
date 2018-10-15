self.addEventListener("install", event => {
  const offlinePage = new Request("/");
  event.waitUntil(
    fetch(offlinePage).then(response => {
      return caches.open("lopun-store").then(cache => {
        return cache.put(offlinePage, response);
      });
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(error =>
      caches.open("lopun-store").then(cache => cache.match("/"))
    )
  );
});

self.addEventListener("push", (event) => {
  const title = "Lopun Store";
  const options = {
    body: event.data.text(),
    icon: "./192x192.png",
    image: "./192x192.png",
    badge: "./192x192.png"
  }
  event.waitUntil(self.registration.showNotification(title, options))
})