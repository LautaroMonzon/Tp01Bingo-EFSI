import { randomizar, crearCartones } from "./funciones.js";
import express from "express";
const app = express();
const PORT = 3000;

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
	const cantidadCartones = parseInt(req.body.valor);
	const cantidadNumsCarton = 3; //Cuantos valores va a tener el carton
	const max = 10; //preguntarle a mate como sacar max del post de arriva
	let cartones = [];

	if (isNaN(cantidadCartones)) {
		res.status(400).send("Valor incorrecto");
		return;
	}
    cartones = crearCartones(cantidadCartones, cantidadNumsCarton, max);

	res.status(200).json({ resultado: cantidadCartones });
});

app.get("/obtener_carton", function (req, res) {
    const cantidadCartones = parseInt(req.body.valor);
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
