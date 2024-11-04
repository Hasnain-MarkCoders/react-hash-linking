// public/service-worker.js

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/bootstrap.min.css',            // Bootstrap CSS
    '/bootstrap-icons.css',          // Bootstrap icons CSS
    '/main.js',                      // Your main JS bundle
    '/static/js/bundle.min.js',      // React bundle
    '/react-refresh',                 // React refresh
    '/react-dom-client.js',           // React DOM client
    '/react-router-dom.js',           // React Router
    '/client-Yisk1Kfn.js',           // Client-side script
    '/DataTable.jsx',                // Your DataTable component
    '/bootstrap-docs.png',           // Bootstrap documentation image
    '/bootstrap-logo.svg',           // Bootstrap logo SVG
    '/96881v2-4',                    // Additional files
    '/index-DRgSCojs',              // Index file
    '/twbs.png',                     // Twbs image
    '/unsplash-photo-1.jpg',        // Unsplash image
    '/unsplash-photo-2.jpg',        // Unsplash image
    '/unsplash-photo-3.jpg',        // Unsplash image
    '/mod.png'                       // Mod image
    // Add more assets as necessary
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching files');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Removing old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
