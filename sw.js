const staticCacheName = 'zimbabweelections2023.co.zw';

const assets = [
  '/assets/images/logo.png',
  '/assets/css/bootstrap.min.css">',
  '/assets/css/meanmenu.css">',
  '/assets/css/animate.min.css">',
  '/assets/css/odometer.min.css">',
  '/assets/css/modal-video.min.css">',
  '/assets/css/nice-select.min.css">',
  '/assets/css/style.css">',
  '/assets/css/responsive.css">',
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});