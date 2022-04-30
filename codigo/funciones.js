import { format } from "path";

export function randomizar(max)
{
    let numRandom = 0;
    numRandom = Math.random() * (max + 1);
    numRandom = Math.floor(numRandom);
    return numRandom;
}

export function crearCartones(cantidadCartones, cantidadNumsEnCarton, numeroMax)
{
    let cartones = [];
    let numRandom = 0;
    for(let i=0; i<cantidadCartones;i++)//crear 3 cartones
    {
        let contenidoCarton = [];
        contenidoCarton.push(null);
        for(let j=0;j<cantidadNumsEnCarton;j++) //pushea 3 numeros para carton
        {
            let cantNumsCorrectos = 0;
            numRandom = randomizar(numeroMax);
            while(cantNumsCorrectos < cantidadNumsEnCarton) //comprueba que cada numero sea diferente
            {
                if(numRandom !== contenidoCarton[cantNumsCorrectos])
                {
                    cantNumsCorrectos++;
                }else
                {
                    cantNumsCorrectos = 0;  
                    numRandom = randomizar(numeroMax);
                }
            }
            contenidoCarton.push(numRandom); 
        }
        cartones.push(contenidoCarton); 
    }
    return cartones;
}

export function asignarNombre(nombreUsuario, cartones, cantidadCartones)
{
    for(let i = 0; i<cantidadCartones; i++)
    {
        if(cartones[i][0] === null)
        {   
            cartones[i][0] = nombreUsuario;
            return cartones;
        }
        console.log(i);
    }
}