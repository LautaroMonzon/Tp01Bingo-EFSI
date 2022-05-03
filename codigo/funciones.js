import { format } from "path";

export function randomizar(min, max)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function elegirNumeros(valor)
{
    switch (valor) 
    {
        case 0:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          valor = randomizar(0,10)
        break;
        case 1:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(10,19)
        break;
        case 2:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(20,29)
        break;
        case 3:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(30,39)
        break;
        case 4:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(40,49)
        break;
        case 5:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(50,59)
        break;
        case 6:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(60,69)
        break;
        case 7:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(70,79)
        break;
        case 8:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(80,89)
        break;
        case 9:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
          valor = randomizar(90,100)
        break;
    }
    return valor;
}

export function crearCartones(cantidadCartones, cantidadNumsEnCarton, numeroMax)
{
    let cartones = [];
    let numRandom = 0;
    for(let i=0; i<cantidadCartones;i++)//crear 3 cartones
    {
        let contenidoCarton = [];
        contenidoCarton.push(null);
        for(let j=0;j<cantidadNumsEnCarton;j++) //pushea 15 numeros para carton
        {
            contenidoCarton.push(randomizar(j));
            
            
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
    }
}