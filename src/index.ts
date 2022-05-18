import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Técnicas de programación</h1>
<div>
  Ejercicios propuestos del apartado "1.1-Técnicas de programación"
  <br> A-Cálculo de descuentos
  <br> B-Autos de carrera
</div>`;

// --- Funciones ---

function calcDescuento() {
  console.clear();

  let precio: number = 450.5;
  let descuento: number = precio * 0.1;
  let precioFinal: number = precio * 0.9;

  let msj: string = `El producto de $${precio} tiene un descuendo del 10% ($${descuento.toFixed(
    2
  )}) y queda en $${precioFinal}`;
  console.log(msj);
}

function tiempoDeVuelta() {
  console.clear();

  let lap1: number = Number(
    prompt(`Ingrese tiempo de primera vuelta (en segundos)`)
  );
  let lap2: number = Number(
    prompt(`Ingrese tiempo de segunda vuelta (en segundos)`)
  );
  let lap3: number = Number(
    prompt(`Ingrese tiempo de tercer vuelta (en segundos)`)
  );
  let lap4: number = Number(
    prompt(`Ingrese tiempo de cuarta vuelta (en segundos)`)
  );

  let totalTime: number = lap1 + lap2 + lap3 + lap4;
  let promedio: number = totalTime / 4;

  let msjTotalTime: string = `El tiempo total de vuelta es de ${totalTime} seg`;
  let msjPromedio: string = `El tiempo promedio de las vueltas es de ${promedio} seg`;

  console.log(msjTotalTime);
  console.log(msjPromedio);
}

// --- Ejecución ---

let MSJ: string = `Elija opción: \n A- Cálculo de descuento \n B-Tiempos de vuelta`;
let option: string | null = String(prompt(MSJ));

switch (option.toUpperCase()) {
  case `A`:
    calcDescuento();
    break;
  case `B`:
    tiempoDeVuelta();
    break;
}
