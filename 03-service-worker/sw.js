
// Ciclo de vida del SW

self.addEventListener('install', event => {

    // Descargar assets
    // Creamos cache
    
    console.log( 'SW: Instalando SW!! ' )

    // Con esto podemos activarlo al momento de instalar
    // Es recomendable dejarlo sin el sino es necesario
    // self.skipWaiting();
})

// Cuando el SW toma el control de la aplicación

self.addEventListener('activate', event => {
    // Borrar cache viejo
    console.log('SW2: Activo y listo para controlar la app ')
})