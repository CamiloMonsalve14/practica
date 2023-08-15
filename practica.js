// let selectedColors = ["red", "blue"];
// selectedColors [2] = "e";
// console.log (selectedColors.length);

// let hour = (24)

// if (hour >= 6 && hour < 12)
//     console.log ("buenos dias")

// else if (hour >= 12 && hour <18 )
//     console.log ("buenas tardes")

// else 
//     console.log ("buenas noches")

let seleccionar = document.querySelector("select");
let parrafo = document.querySelector("p");

seleccionar.addEventListener("change", establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if (eleccion === "soleado") {
    parrafo.textContent =
      "El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.";
  } else if (eleccion === "lluvioso") {
    parrafo.textContent =
      "Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.";
  } else if (eleccion === "nevando") {
    parrafo.textContent =
      "Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.";
  } else if (eleccion === "nublado") {
    parrafo.textContent =
      "No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.";
  } else {
    parrafo.textContent = "";
  }
}
