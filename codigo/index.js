import { randomizar, crearCartones } from "./funciones.js";
import express from "express";
const app = express();
const PORT = 3000;

//variables globales
let cantidadCartones = 0;
let cantidadNumsCarton = 3;//Cuantos valores va a tener el carton
let cartones = [];
let propietariosCarton = [];
const maximo = 10;

app.use(express.json());

app.post("/numero_aleatorio", function (req, res) {
	const max = parseInt(req.body.valor);

	if (isNaN(max)) {
		res.status(400).send("Valor incorrecto");
		return;
	}
	res.status(200).json({ resultado: randomizar(req.body.valor) });
});

app.post("/iniciar_juego", function (req, res) {
	cantidadCartones = parseInt(req.body.valor);

	if (isNaN(cantidadCartones)) {
		res.status(400).send("Valor incorrecto");
		return;
	}

    cartones = crearCartones(cantidadCartones, cantidadNumsCarton, maximo);

	res.status(200).json({ resultado: cantidadCartones });
});

app.get("/obtener_carton", function (req, res) {
	const mensajeCarton = "Su cartón tiene los siguientes valores";
    propietariosCarton.push(req.body.valor);

	console.log(cartones[0]);

	res.status(200).json({ mensajeCarton: mensajeCarton, carton1: cartones[0] });
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
