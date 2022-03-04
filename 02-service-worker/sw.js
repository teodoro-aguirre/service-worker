self.addEventListener('fetch', event => { 

    // Un error 404 no es interpretado por el catch, es mejor
    // utilizar una promesa .then 

    const resp = fetch(event.request)
        .then( resp => {

            // if( resp.ok ) return resp
            // else return fetch('img/main.jpg')
            return resp.ok ? resp : fetch('img/main.jpg')
        })

    event.respondWith( resp )

})