const CantHombres = parseInt(prompt("Ingrese la cantidad de hombres"));
const CantMujeres = parseInt(prompt("Ingrese la cantidad de mujeres"));

const PorcenHombres = ((CantHombres * 100) / (CantHombres + CantMujeres)).toFixed(2);
const PorcenMujeres = ((CantMujeres * 100) / (CantHombres + CantMujeres)).toFixed(2);

console.log(`El porcentaje de hombres es ${PorcenHombres}%, y el porcentaje de mujeres es ${PorcenMujeres}%`);
