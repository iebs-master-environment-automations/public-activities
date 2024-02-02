const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());


const serverName = process.env.SERVER_NAME || 'localhost';
const userName = process.env.USER_NAME || 'root';
const userPassword = process.env.USER_PASSWORD || 'root';
const databaseName = process.env.DATABASE_NAME || 'db';

const dbUrl = `mongodb://${userName}:${userPassword}@${serverName}/${databaseName}`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: userName,
  pass: userPassword,
  authSource: 'admin'
};

// Conexión a la base de datos
mongoose.connect(dbUrl).then(() => {
  console.log("Database connected");
}).catch((error) => {
  console.log("Error connecting to the database");
  console.log(error);

  console.log("DB URL: " + dbUrl);
  console.log("DB Options");
  console.log(dbOptions);
});

// Definición del esquema de la tabla "juegos"
const juegoSchema = new mongoose.Schema({
  nombre: String,
  plataforma: String,
  genero: String,
  precio: String
});

// Creación del modelo de la tabla "juegos"
const Juego = mongoose.model('Juego', juegoSchema);

// Ruta para obtener todos los juegos
app.get('/juegos', async (req, res) => {
  const juegos = await Juego.find();
  res.send(juegos);
});

// Ruta para obtener un juego por ID
app.get('/juegos/:id', async (req, res) => {
  const juego = await Juego.findById(req.params.id);
  res.json(juego);
});

// Ruta para agregar un nuevo juego
app.post('/juegos', async (req, res) => {
  const juego = new Juego(req.body);
  await juego.save();
  res.json(juego);
});

// Ruta para actualizar un juego existente
app.put('/juegos/:id', async (req, res) => {
  const juego = await Juego.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(juego);
});

// Ruta para eliminar un juego existente
app.delete('/juegos/:id', async (req, res) => {
  const juego = await Juego.findByIdAndDelete(req.params.id);
  res.json(juego);
});

// Inicio del servidor
app.listen(port, () => {
  console.log("Connecting to the database...");
  console.log(dbUrl);
  console.log(dbOptions);

  console.log(`Server started at http://localhost:${port}`);
});
