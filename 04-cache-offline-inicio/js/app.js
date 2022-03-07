

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

// Validacion si el navegador soporta el cache 
if( window.caches ) {

    // Indicamos que abrimos el cache prueba-1/2 si no existe
    // lo crea
    caches.open('prueba-1')
    caches.open('prueba-2')

    // De esta manera comprobamos si existe un cache
    // caches.has('prueba-3').then( console.log )

    // De esta manera borramos un cache 
    // caches.delete('prueba-1').then( console.log )

    // Creamos un cache usando versionado 
    caches.open('cache-v1.1').then( cache => { // De esta manera podemos trabajar con el cache
        // Recibimos los datos y archivo como una BD PERO NO LO ES!
        // Podemos indicar que se almacenen cosas
        // cache.add('/index.html');

        // Podemos almacenar imagenes y otros mas, a traves de
        // un arreglo de objetos 
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then( () => {
            // Para borrar algo de este cache en especifico
            // cache.delete('/css/style.css')

            // De esta manera podemos reemplazar lo que existe
            //Dentro de un cache
            cache.put( 'index.html', new Response('Hola mundo') )
        })


        // Como poder leer un archivo que se encuentra en cache
        // cache.match('/index.html')
        //     .then( res => {
                // Podemos mandarlo como respuesta hacia otro
                // lado
                // Se puede reemplazar algo que se encuentre en
                // el cache y actualizarlo por algo nuevo 
        //         res.text().then( console.log )

        //     })

    })
    
    // Regresa todos los caches que existen
    // Se maneja como una promise
    caches.keys().then( keys => { 
        console.log(keys)
        })
};