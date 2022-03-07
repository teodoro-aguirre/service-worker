
// El APP SHELL es todo lo que la app requiere
// para trabajar


const CACHE_NAME = 'cache-1'

self.addEventListener('install', e => {

    // Guardar APP SHELL a la hora de instalar el SW
    const cacheProm = caches.open(CACHE_NAME)
        .then( cache => {

            return cache.addAll([
                '/',
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

// Las estrategias de cache se hacen en el evento fetch
self.addEventListener('fetch', e => {
    // 1 Cache only
    // Se ocupa cuando toda la aplicacion solo funciona
    // con el cache
    // e.respondWith( caches.match( e.request ) ) // Lee las respuestas que coinciden con el cache(Todos)

    
    // 2- Cache with Network Fallback
    // Primero necesitamos verificar si el archivo existe en el cache
    const respuestaCache = caches.match( e.request )
        .then( res => {
            if( res ) return res;

            // No existe
            // tengo que ir a la web
            console.log('No existe', e.request.url )

            return fetch( e.request ).then( newResp => {

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put( e.request, newResp );
                        })

                    return newResp.clone()

                })
    })

    e.respondWith( respuestaCache )
    


})