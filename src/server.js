// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando o express
const server = express()
server

    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar tempate engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // criar uma rota
    .get('/', pages.index)
    .get('/create-orphanage', pages.createOrphanage)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)

// ligar o servidor
server.listen(5500)

