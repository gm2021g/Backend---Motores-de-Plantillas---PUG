const path = require('path');
const express = require('express');
const { productos } = require('./data/data');

const rutasApi = require('./routers/app.router');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static(path.resolve(__dirname, './public')));

//Templatess Engine
app.set('view engine', 'pug');
app.set('views', './views');

// Rutas
app.use('/api', rutasApi);

app.get('/productos', (req, res) => {
  res.render('index', { showAllProducts: true, products: productos })
})

const connectedServer = app.listen(PORT, () => {
  console.log(`Servidor activo y escuchando en el puerto ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.log(error.message);
})


