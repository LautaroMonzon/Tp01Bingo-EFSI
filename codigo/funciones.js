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
  for(let i=0; i<cantidadCartones;i++)//crear 3 cartones
  {
    let decimalesSacados = [true, true, true, true, true, true, true, true, true, true];
    let contenidoCarton = [];
    let numeroSacado = 0;
    contenidoCarton.push(null);
    for(let j=0;j<10;j++) //pushea los primeros 10 numeros para carton (1 de cada decena)
    {
      contenidoCarton.push(elegirNumeros(j));
    }
    let completo=0;
    let k=0;
    while(completo!==5)
    {
      k++;
      if((Math.random() > 0.5) === true)
      {
        if(decimalesSacados[k])
        {
          decimalesSacados[k]=false;
          numeroSacado = elegirNumeros(k);
          for(let l=0;l<contenidoCarton.length;l++)
          {
            if(numeroSacado === contenidoCarton[l])
            {
              numeroSacado = elegirNumeros(k);
              l=-1;
            }
          }
          contenidoCarton.push(numeroSacado);
          completo++;
        }
      }
      if(k===9)k=-1;
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