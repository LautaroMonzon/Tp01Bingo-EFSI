export function randomizar(max)
{
    numRandom = Math.random() * (max + min);
    numRandom = Math.floor(numRandom);
    return numRandom;
}

export function crearCartones(cantidad)
{
    let cantidadCartones = [];
    let numRandom = 0;
    for(i=0; i<cantidad;i++)
    {
        for(i=0; i<3;i++)
        {
            numRandom = randomizar(numRandom);
        }
    }
}