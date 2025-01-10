import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url'

const app = express();
const port = 3000;

// Alternativa para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://localhost:27017/letterBox')
	.then(() => {
		console.log('Connection open');
	})
	.catch((error) => {
		console.log('Oh no, error.');
		console.log(error);
	})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/home', async (req, res) => {
	// Solicitar una escena de una pelicula reciente para mostrar en el homepage
})

app.get('/films', async (req, res) => {
	// Solicitar peliculas
})

app.get('/films/:id', async (req, res) => {
	// Solicitar pelicula especifica
})

app.get('/series', async (req, res) => {
	// Solicitar series
})

app.get('/series/:id', async (req, res) => {
	// Solicitar serie especifica
})

app.listen(port, () => {
	console.log(`LISTENING TO PORT ${port}`);
})
