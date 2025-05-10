self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('static-cache').then((cache) => {
			return cache.addAll([
				'/fonts/Gilroy-Semibold.woff2',
				'/img/slide1.webp'
			]);
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
