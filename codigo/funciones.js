import { format } from "path";

export function randomizar(max)
{
    let numRandom = 0;
    numRandom = Math.random() * (max + 1);
    numRandom = Math.floor(numRandom);
    return numRandom;
}

export function crearCartones(cantidad)
{
    let cantidadCartones = [];
    let contenidoCarton = [];
    let cantidadNumeros = 0;
    let numRandom = 0;
    for(i=0; i<cantidad;i++)
    {
        while(cantidadNumeros < 3)
        {
            for(i = 0; i<3;i++)
            {
                numRandom = randomizar(numRandom);
                if(numRandom !== contenidoCarton[i])
                {
                    validos++;
                }else 
                {
                    validos = 0;  
                    aleatorio = hacerRandom();
                }
            
            }
        }
    }
}