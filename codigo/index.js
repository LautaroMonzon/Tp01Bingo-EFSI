import { randomizar, crearCartones, asignarNombre } from "./funciones.js";
import express from "express";
const app = express();
const PORT = 3000;

//variables globales
let cantidadCartones = 0;
let cantidadNumsCarton = 3;//Cuantos valores va a tener el carton
let cartones = [];
const maximo = 10;
let hayEspacio = 0;
let nombreJugador;

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
	if(hayEspacio === cantidadCartones)
	{
		res.status(400).send("Ya se ocuparon todos los cartones");
		return;
	}

	nombreJugador = (req.body.valor);
	let cartonEnviado = [];
	cartones = asignarNombre(nombreJugador, cartones, cantidadCartones);

	for(let i=0;i<cantidadCartones; i++)
	{
		if(cartones[i][0] == nombreJugador)
		{
			cartonEnviado = cartones[i];
		}
	}
	hayEspacio++;
	res.status(200).json({cartonEnviado: cartonEnviado });
});

app.get("/cartones", function (req, res) {
	let respuesta = (req.body.valor);
	if(respuesta === undefined)
	{
		res.status(200).json({cartones : cartones});
	}
	for(let i=0;i<cantidadCartones; i++)
	{
		if(cartones[i][0] === respuesta)
		{
			res.status(200).json({carton : cartones[i]});
		}
	}
	res.status(400).send("No hay ningún cartón con ese nombre");
});

app.get("/sacar_numero", function (req, res) {
	let numeroSacado = randomizar(maximo);
	let cartonesComprobar = [];
	for(let i = 0;i<cantidadCartones;i++)
	{
		cartonesComprobar = cartones[i].slice(0);
	}
	console.log(cartonesComprobar);
	
	for(let i = 0; i<cantidadCartones;i++)
	{
		for(let j = 0;j<cartones[0].length;j++)
		{
			if(numeroSacado === cartones[i][j])
			{
				cartonesComprobar[i][j] = null;
			}
		}
	}

	res.status(400).json({numeroSacado : numeroSacado});
	
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
