const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"))

// Configuracion de vistas y Motor de plantilla EJS
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

// Ruta Formulario principal
app.get('/formulario', (req, res) => {
    res.render('formulario', {});
})

// Ruta Resultado
app.post('/resultado', function(req, res) {
    console.log("POST DATA \n\n", req.body);

    let form = req.body;
    res.render('resultado',{campos:form});

    //res.redirect('/resultado');   
})

// Ruta Resultado
app.get('/resultado', (req, res) => {
    res.render('resultado', { });
})

app.listen(5100, () => {
    console.log('Escuchando en el puerto 5100');
})