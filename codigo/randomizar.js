export function randomizar(min, max, numRandom)
{
    numRandom = Math.random() * (max + min);
    numRandom = Math.floor(numRandom);
    return numRandom;
}