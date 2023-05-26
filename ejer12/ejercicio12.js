const X = parseInt(prompt("Introduce un número X para resolver la ecuacion: X * M + N - K"));
const M = parseInt(prompt("Introduce un número M para resolver la ecuacion: X * M + N - K"));
const N = parseInt(prompt("Introduce un número N para resolver la ecuacion: X * M + N - K"));
const K = parseInt(prompt("Introduce un número K para resolver la ecuacion: X * M + N - K"));

const J = (X * M + N - K).toFixed(2);

console.log(`El resultado de la ecuacion es ${J}`);