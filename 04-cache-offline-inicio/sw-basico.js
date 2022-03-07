


self.addEventListener('fetch', event => {

    // const offlineResp = new Response(`
    //     Bienvenido a mi Página web
    //     Para usarla necesitas internet
    // `)

    const offlineResp = new Response(`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Mi PWA</title>
    
    </head>
    <body class="container p-3">
    
        <h1>Offile Mode</h1>
    
    </body>
    </html>

    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    }) // Necesitamos mandar el header de que es un html

    // const offlineResp = fetch('pages/offline.html')

    const resp = fetch(event.request)
                    .catch( () => offlineResp)

    event.respondWith( resp )
})