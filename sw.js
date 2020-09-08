/* eslint-disable */

if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  const SW_VERSION = 1;
  const CACHE_ROOT = 'pwa-calculator-cache';
  const CACHE_NAME = `${CACHE_ROOT}-v${SW_VERSION}`;

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "b6daeee181d700bf0ccabd9c1d5da3cb"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "precache-manifest.6487af96544c84e13a53b8df42643112.js",
    "revision": "6487af96544c84e13a53b8df42643112"
  },
  {
    "url": "service-worker.js",
    "revision": "2c30d7f94b8325780786ad021dcfcf9b"
  },
  {
    "url": "static/css/main.7f36fcc1.chunk.css",
    "revision": "35f6103e14f6ca0c9bc72cfedd34c08e"
  },
  {
    "url": "static/js/2.15453ec2.chunk.js",
    "revision": "1ac719cc167da099f45a6d800893b38a"
  },
  {
    "url": "static/js/main.85005a38.chunk.js",
    "revision": "63bf87d2c73e0c41b725abefe7fca6d9"
  },
  {
    "url": "static/js/runtime-main.0e45a2b5.js",
    "revision": "8db183b55dc50863e46b258157feb55e"
  }
]);

    /* custom cache rules*/
    workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/]
    });

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
          })
        ]
      })
    );

    self.addEventListener('install', (event) => {
      console.warn(`SW: ${event.type} event fired`);

      event.waitUntil(
        // create a local cache for our app resources
        caches
          .open(CACHE_ROOT)
          // Once it's open...
          .then(() => {
            console.log('SW: Cache opened');
          })
          .catch((error) => {
            console.error(error);
          })
      );
    });

    self.addEventListener('activate', (event) => {
      console.log(`SW: ${event.type} event fired`);
      event.waitUntil(
        caches.keys().then((cacheList) => {
          return Promise.all(
            cacheList.map((currentCache) => {
              if (
                CACHE_NAME !== currentCache &&
                currentCache.startsWith(CACHE_ROOT)
              ) {
                console.log(`SW: deleting cache ${currentCache}`);
                return caches.delete(currentCache);
              }
            })
          );
        })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                console.log(`SW: Adding ${event.request.url} to the cache`);
                cache.put(event.request, responseClone);
              });
            }
          })
          .catch(() => {
            console.log(`SW: Trying Cache ${event.request.url}`);
            return caches.match(event.request).then((response) => {
              if (response) {
                console.log(`SW: Return Cache ${event.request.url}`);
                return response;
              }
            });
          })
      );
    });
  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
