const Persona1 = parseInt(prompt("Ingrese la cantidad invertida de la persona 1"));
const Persona2 = parseInt(prompt("Ingrese la cantidad invertida de la persona 2"));
const Persona3 = parseInt(prompt("Ingrese la cantidad invertida de la persona 3"));

const TotalInvertido = Persona1 + Persona2 + Persona3;
const PorcentajePersona1 = ((Persona1 * 100) / TotalInvertido).toFixed(2);
const PorcentajePersona2 = ((Persona2 * 100) / TotalInvertido).toFixed(2);
const PorcentajePersona3 = ((Persona3 * 100) / TotalInvertido).toFixed(2);

console.log(`El porcentaje invertido por la persona 1 es ${PorcentajePersona1}%, el porcentaje invertido por la persona 2 es ${PorcentajePersona2}%, y el porcentaje invertido por la persona 3 es ${PorcentajePersona3}%`)