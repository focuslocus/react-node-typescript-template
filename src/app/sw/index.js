if (workbox) {
    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
    workbox.skipWaiting();
    workbox.clientsClaim();
} else {
    console.error('Workbox not defined!')
}
