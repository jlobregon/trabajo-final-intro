const express = require('express');
const { PORT } = process.env;
const recetasRoutes = require('./routes/recetas');
const ingredienteRoutes = require('./routes/ingredientes');
const chefsRoutes = require('./routes/chefs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', function (req, res) {
  res.redirect('api/v1/status');
});

const v1Route = express.Router();

v1Route.get('/status', function (req, res) {
  res.send('El servidor está funcionando');
});

v1Route.use('/recetas', recetasRoutes);
v1Route.use('/ingredientes', ingredienteRoutes);
v1Route.use('/chefs', chefsRoutes);

app.use('/api/v1', v1Route);

app.use(require('./middleware/errorHandling'));
app.listen(PORT, function () {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
