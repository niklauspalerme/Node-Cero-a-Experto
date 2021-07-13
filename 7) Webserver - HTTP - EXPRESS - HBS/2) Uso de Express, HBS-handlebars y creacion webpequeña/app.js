const express = require('express')
const server = express()

////////////////////////////////////////////////////////////////////////////
//Middleware


//Middlere Globales

//Lo usamos para definir esta carpeta publica
server.use(express.static(__dirname + '/public'))

//Express HBS engine 
server.set('view engine', 'hbs');



////////////////////////////////////////////////////////////////////////////
//Endpoint


// GET --> http://localhost:8080/
server.get('/', (req, resp) => {

    //La funcion render es del HBS
    resp.render('home.hbs', {
        name: "Nicolas Palermo ",
        year: new Date().getFullYear()
    })

})


////////////////////////////////////////////////////////////////////////////
//Puerto


server.listen(8080, () => {
    console.log("Servidor Activo en 8080");
})