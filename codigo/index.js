import { randomizar, crearCartones, asignarNombre } from "./funciones.js";
import express from "express";
const app = express();
const PORT = 3000;

//variables globales
let cantidadCartones = 0;
let cantidadNumsCarton = 15;//Cuantos valores va a tener el carton
let cartones = [];
const maximo = 100;
let hayEspacio = 0;
let nombreJugador;

app.use(express.json());

app.post("/numero_aleatorio", function (req, res) {
	const max = parseInt(req.body.valor);

	if (isNaN(max)) {
		res.status(400).send("Valor incorrecto");
		return;
	}
	res.status(200).json({ resultado: randomizar(0, max) });
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

	nombreJugador = req.body.valor;

	for(let i=0;i<cartones.length;i++)
	{
		if(nombreJugador === cartones[i][0])
		{
			res.status(400).send("Ese nombre ya está en uso");
			return;
		}
	}

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
	let respuesta = req.body.valor;
	if(respuesta === undefined)
	{
		res.status(200).json({cartones : cartones});
		return;
	}

	for(let i=0;i<cantidadCartones; i++)
	{
		if(cartones[i][0] === respuesta)
		{
			res.status(200).json({carton : cartones[i]});
			return;
		}
	}
	res.status(400).send("No hay ningún cartón con ese nombre");
});

let borrarNombres = true;
let cartonesComprobar = [];
let seDecidioGanador = false;
let cartonGanador;

app.get("/sacar_numero", function (req, res) {
	let numeroSacado = randomizar(maximo, 1);
	if(seDecidioGanador)
	{
		res.status(200).json({carton : cartonGanador});
		return;
	}

	if(borrarNombres)
	{ 
		cartonesComprobar = [...cartones];
		for(let i = 0;i<cantidadCartones;i++)
		{
			//cartonesComprobar[i] = cartonesComprobar[i].slice(1);
			cartonesComprobar[i].splice(0, 1);
		}
		borrarNombres = false;
	}
	
	for(let i = 0; i<cantidadCartones;i++)
	{
		let numsCorrectos = 0;
		for(let j = 0;j<cartonesComprobar[0].length;j++)
		{
			if(numeroSacado === cartonesComprobar[i][j]) //hace valores null
			{
				cartonesComprobar[i][j] = null;
			}

			if(cartonesComprobar[i][j] === null)
			{
				numsCorrectos++;
			}
			if(numsCorrectos === cartonesComprobar[0].length)
			{
				cartonGanador = cartones[i][0];
				res.status(200).json({carton : cartonGanador});
				seDecidioGanador = true;
				return;
			}
		}
	}

	res.status(200).json({numeroSacado : numeroSacado});
	
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
