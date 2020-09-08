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
    "revision": "14adace7f8d333f8cddf7442e82aedaf"
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
    "url": "precache-manifest.ab5a145d7ac4ad549f4f38633960e464.js",
    "revision": "ab5a145d7ac4ad549f4f38633960e464"
  },
  {
    "url": "service-worker.js",
    "revision": "7892486aaade98536fb2158a10153ee6"
  },
  {
    "url": "static/css/main.7f36fcc1.chunk.css",
    "revision": "35f6103e14f6ca0c9bc72cfedd34c08e"
  },
  {
    "url": "static/js/2.8172f3ef.chunk.js",
    "revision": "41a151cc9c37b7744b19bf4fbe0aaca8"
  },
  {
    "url": "static/js/main.e2974389.chunk.js",
    "revision": "f3d7b24b685277c91bcf27c2829279ce"
  },
  {
    "url": "static/js/runtime-main.92ee656d.js",
    "revision": "6af87c0f174aef5ce43dcc88583e5e11"
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
