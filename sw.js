/* Tasty Express staff app — service worker for Web Push notifications.
   Push only: no fetch handling, so page loads and the auto-update
   (version.json) flow are completely unaffected. */
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", function (event) {
  var data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { body: event.data ? event.data.text() : "" };
  }
  var title = data.title || "Tasty Express";
  var options = {
    body: data.body || "Có đơn mới!",
    icon: "/tuyen-giao/assets/logo.png",
    badge: "/tuyen-giao/assets/logo.png",
    tag: "tasty-new-order",
    renotify: true,
    vibrate: [200, 100, 200],
    data: { url: data.url || "/tuyen-giao/" }
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  var target = (event.notification.data && event.notification.data.url) || "/tuyen-giao/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (wins) {
      for (var i = 0; i < wins.length; i++) {
        if (wins[i].url.indexOf("/tuyen-giao/") !== -1 && "focus" in wins[i]) {
          return wins[i].focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(target);
    })
  );
});
