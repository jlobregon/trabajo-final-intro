const express = require('express');
const { PORT } = process.env;

const app = express();

app.get('/status', function (req, res) {
  res.send('El servidor está funcionando');
});

const recetasRoutes = require('./api/recetas');

app.use('/recetas', recetasRoutes);

app.listen(PORT, function () {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
