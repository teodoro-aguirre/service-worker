


self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
        Bienvenido a mi Página web
        Para usarla necesitas internet
    `)

    const resp = fetch(event.request)
                    .catch( () => offlineResp)

    event.respondWith( resp )
})