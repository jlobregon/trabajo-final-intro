import express from 'express';
const { PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});