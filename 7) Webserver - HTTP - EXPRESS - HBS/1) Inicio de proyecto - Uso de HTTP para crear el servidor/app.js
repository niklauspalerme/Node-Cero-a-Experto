///////////////////////////////////////////////////////
// Creando servidor - Usando HTTP

//Importamos el HTTP
const http = require('http')



//Creamos el servidor 
//Este servidor va escuchar todas las peticiones
//Ignorando asi si es un uri en particular
http.createServer((req, resp) => {

        //Definimos el tipo de respuesta
        resp.writeHead(200, { "Content-Type": "application/json" });

        let salida = {
            nombre: "Nicolas Palermo",
            edad: 20,
            url: req.url
        }

        //Esta funcion escribe el server 
        //resp.write("Hello")

        resp.write(JSON.stringify(salida))

        //Terminas la peticion
        resp.end()

    })
    .listen(8080)