const express = require('express');
const { PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const recetasRoutes = require('./api/recetas');

app.use('/recetas', recetasRoutes);

app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
