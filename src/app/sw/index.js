if (!workbox) {
  throw new Error('Workbox not defined');
}

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
workbox.skipWaiting();
workbox.clientsClaim();
