let counterExcelent = 0;
let counterAprove = 0;
let counterReprove = 0;
let sumScores = 0;

function scores() {
  let entry = prompt("Ingresa el nombre del alumno o ESC para salir");
  while (entry != "ESC" && entry != "esc") {
    let score = Number(prompt("Ingresa su nota del 0 al 10"));
    if (score >= 11) {
      alert("La nota debe ser un número entre 0 y 10");
      continue;
    } else if (score >= 7) {
      counterExcelent += 1;
      console.log(entry + " ha sacado excelente");
    } else if (score >= 4 && score < 7) {
      counterAprove += 1;
      console.log(entry + " ha sacado aprobado");
    } else if (score >= 0) {
      counterReprove += 1;
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
    `La cantidad de alumnos con excelente es ${counterExcelent}, la cantidad de alumnos aprobados es ${counterAprove} y la cantidad de alumnos reprobados es ${counterReprove}`
  );
  let scoreAmount = counterExcelent + counterAprove + counterReprove;
  let average = sumScores / scoreAmount;
  let roundedNum = average.toFixed(1);
  console.log(`La calificación promedio de la clase es ${roundedNum}`);
  console.log("Adios!");
}

scores();
