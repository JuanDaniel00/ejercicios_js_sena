const Num = parseInt(prompt("Ingrese un número para sacar el 45% de su cuadrado: "));
const CuadradoNum = Num * Num;
const PorcenCuadradoNum = (CuadradoNum * 45) / 100;

console.log(`El 45% del cuadrado de ${Num} es ${PorcenCuadradoNum}`);