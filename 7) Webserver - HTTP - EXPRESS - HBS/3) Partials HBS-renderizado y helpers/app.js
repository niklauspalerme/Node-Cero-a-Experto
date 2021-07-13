const express = require('express')
const server = express()
const hbs = require('hbs')

////////////////////////////////////////////////////////////////////////////
//Middleware


//Middlere Globales

server.use(express.static(__dirname + '/public'))

//Para poder usar partials
hbs.registerPartials(__dirname + '/views/partials')

server.set('view engine', 'hbs');

hbs.registerHelper('getYear', () => {
    return new Date().getFullYear()
})


////////////////////////////////////////////////////////////////////////////
//Endpoint


// GET --> http://localhost:8080/
server.get('/', (req, resp) => {

    resp.render('home.hbs', {
        name: "Nicolas Palermo ",
    })

})



// GET --> http://localhost:8080/home
server.get('/about', (req, resp) => {


    resp.render('about.hbs')

})


////////////////////////////////////////////////////////////////////////////
//Puerto


server.listen(8080, () => {
    console.log("Servidor Activo en 8080");
})