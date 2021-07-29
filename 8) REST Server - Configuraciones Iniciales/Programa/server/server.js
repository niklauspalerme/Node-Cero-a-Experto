////////////////////////////////////////////////////////////////////////////////////////////
//Inmportamos

require('./config/config')
const express = require('express');
const bodyParser =  require('body-parser');
const { response } = require('express');
const app = express();


////////////////////////////////////////////////////////////////////////////////////////////
//Middleware


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


////////////////////////////////////////////////////////////////////////////////////////////
//Endpoints - Con Ruteo


app.get('/usuarios', (req,res)=>{
    res.send("Hello World GET")
})

app.post('/usuarios', (req,res)=>{

    let body = req.body

    if (body.nombre === undefined)
        res.status(400).json({ok:false, mensaje:"El nombre es necesario"})
    else
        res.json({"body": body})
})

app.put('/usuarios/:id', (req,res)=>{

    let {id}= req.params;
    res.send(`Hellow Zawardo PUT ${id}`)
})

app.delete('/usuarios/:id', (req,res)=>{
    let {id}= req.params;
    res.send(`Hellow Zawardo DELETE ${id}`)
})


////////////////////////////////////////////////////////////////////////////////////////////
//Puerto


app.listen(process.env.PORT, function () {
    console.log(`Sistema armado en el puerto ${process.env.PORT}!`);
});

 
