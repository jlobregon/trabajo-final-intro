const express = require('express');
const { PORT } = process.env;
const recetasRoutes = require('./routes/recetas');

const app = express();
app.get('/', function (req, res) {
    res.redirect('api/v1/status');
});

const v1Route = express.Router();

v1Route.get('/status', function (req, res) {
  res.send('El servidor está funcionando');
});

v1Route.use('/recetas', recetasRoutes);

app.use('/api/v1', v1Route);

app.listen(PORT, function () {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
