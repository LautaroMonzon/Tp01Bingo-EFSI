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

	if (isNaN(cantidadCartones)) {
		res.status(400).send("Valor incorrecto");
		return;
	}
    crearCartones();

	res.status(200).json({ resultado: cantidadCartones });
});

app.get("/obtener_carton", function (req, res) {
    const cantidadCartones = parseInt(req.body.valor);
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
