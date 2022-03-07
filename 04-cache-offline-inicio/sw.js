
// El APP SHELL es todo lo que la app requiere
// para trabajar

self.addEventListener('install', e => {

    // Guardar APP SHELL a la hora de instalar el SW
    const cacheProm = caches.open('cache-1')
        .then( cache => {

            return cache.addAll([
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
                '/js/app.js'
            ]);

        }) 

    // Espera a que una promesa se resuelva
    e.waitUntil( cacheProm );
})