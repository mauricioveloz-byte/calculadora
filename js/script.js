const formulario = document.getElementById("formulario");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");
const botonesOperacion = document.querySelectorAll(".operador");

let operacion = "+";

botonesOperacion.forEach(function (boton) {
  boton.addEventListener("click", function () {
    operacion = boton.dataset.operacion;

    botonesOperacion.forEach(function (otroBoton) {
      otroBoton.classList.remove("seleccionado");
    });

    boton.classList.add("seleccionado");
  });
});

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const valor1 = Number(numero1.value);
  const valor2 = Number(numero2.value);
  let total;

  if (valor1 < 0 || valor2 < 0) {
    mostrarMensaje("No escribas números negativos.");
    return;
  }

  if (operacion === "+") {
    total = valor1 + valor2;
  } else if (operacion === "-") {
    if (valor2 > valor1) {
      mostrarMensaje("El resultado no puede ser negativo.");
      return;
    }
    total = valor1 - valor2;
  } else if (operacion === "*") {
    total = valor1 * valor2;
  } else if (operacion === "/") {
    if (valor2 === 0) {
      mostrarMensaje("No se puede dividir entre cero.");
      return;
    }
    if (valor2 > valor1) {
      mostrarMensaje("El divisor no puede ser mayor que el dividendo.");
      return;
    }
    total = valor1 / valor2;
  }

  resultado.textContent = "Resultado: " + total;
  resultado.classList.remove("error");
});

function mostrarMensaje(mensaje) {
  resultado.textContent = mensaje;
  resultado.classList.add("error");
}

formulario.addEventListener("reset", function () {
  operacion = "+";
  resultado.textContent = "Resultado: ";
  resultado.classList.remove("error");

  botonesOperacion.forEach(function (boton, indice) {
    if (indice === 0) {
      boton.classList.add("seleccionado");
    } else {
      boton.classList.remove("seleccionado");
    }
  });
});