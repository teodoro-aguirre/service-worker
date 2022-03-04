
// Ciclo de vida del SW

self.addEventListener('install', event => {

    // Descargar assets
    // Creamos cache
    
    console.log( 'SW: Instalando SW!!' )

    const instalacion = new Promise( (resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);

    })
    // Con esto podemos activarlo al momento de instalar
    // Es recomendable dejarlo sin el sino es necesario
    

  event.waitUntil( instalacion );  
})

// Cuando el SW toma el control de la aplicación

self.addEventListener('activate', event => {
    // Borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app ')
})

// FETCH: Manejo de peticiones HTTP
// Intercepta llamadas 

self.addEventListener('fetch', event => {

    // Aplicar estrategias del cache
    // console.log( 'SW: ', event.request.url )

    // if( event.request.url.includes('https://reqres.in/api/users') ){
    //     const resp = new Response(`{ ok: false, mensaje: 'jajaja'}`);
    //     event.respondWith( resp )
    // }

})

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexión!')
    console.log( event )
    console.log( event.tag )
    
});