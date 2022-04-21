const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

functio
	
app.post("/", function (req, res) {
	const primerNumero = 1;
    const numeroMaximo = 10;
    const numerRandom = 0;
    
    

    console.log(req.body)
	// res.end();
    res.send("vale");
});

app.get("/mi_endpoint", function (req, res) {
    res.send("respuesta");
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
