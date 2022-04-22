import { randomizar } from "./randomizar.js";
import express from "express";
import { application } from "express";
const app = express();
const PORT = 3000;

app.use(express.json());
	
app.post("/numero_aleatorio", function (req, res) {
	const numMinimo = 1;
    const numMaximo = 10;
    let numero_aleatorio = [];
    numero_aleatorio = randomizar(numMinimo, numMaximo, numero_aleatorio);
    
    console.log(req.body);
	// res.end();
    let arrayAMostrar = ["El número random entre y 10 es: ", numero_aleatorio]
    res.send(arrayAMostrar);
});

app.post("/iniciar_juego", function (req, res) {
    const numCartones = 3;
    res.send("El número de cartones es: " + numero_aleatorio);
});

app.get("/mi_endpoint", function (req, res) {
    res.send("respuesta");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
