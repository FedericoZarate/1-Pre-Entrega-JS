// ejemplo de condicional

/*let edad = 20;
if (edad <= 17) {
  console.log("eres mayor");
} else {
  console.log("eres menor de edad");
}

if (edad >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}

// ejemplo de ciclo
let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
  0;
}*/

let counterEx = 0;
let counterAp = 0;
let counterRep = 0;
let sumScores = 0;

function scores() {
  let entry = prompt("Ingresa el nombre del alumno o ESC para salir");
  while (entry != "ESC" && entry != "esc") {
    let score = Number(prompt("Ingresa su nota del 0 al 10"));
    if (score >= 11) {
      alert("La nota debe ser un número entre 0 y 10");
      continue;
    } else if (score >= 7) {
      counterEx += 1;
      console.log(entry + " ha sacado excelente");
    } else if (score >= 4 && score < 7) {
      counterAp += 1;
      console.log(entry + " ha sacado aprobado");
    } else if (score >= 0) {
      counterRep += 1;
      console.log(entry + " ha sido reprobado");
    } else {
      alert(
        "La nota debe ser un número entre 0 y 10 escrita en formato numérico, no se admiten palabras"
      );
      continue;
    }
    sumScores += score;
    entry = prompt("ingrese nombre o ESC para salir");
  }
  console.log(
    `La cantidad de alumnos con excelente es ${counterEx}, la cantidad de alumnos aprobados es ${counterAp} y la cantidad de alumnos reprobados es ${counterRep}`
  );
  let scoreAmount = counterEx + counterAp + counterRep;
  let average = sumScores / scoreAmount;
  let roundedNum = average.toFixed(1);
  console.log(`La calificación promedio de la clase es ${roundedNum}`);
  console.log("Adios!");
}

scores();
