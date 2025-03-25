/*Generador de Secuencia de Fibonacci con Límite
🎯 Enunciado:
Crea una aplicación donde el usuario ingrese un número N y se genere la secuencia de Fibonacci hasta ese número.

Validar que el número ingresado es mayor que 0.

Mostrar la secuencia en pantalla.

Guardar en localStorage el último número ingresado y cargarlo al abrir la página.

*/

function fibonacci(n) {
   // COMPLETAR
}

function generarFibonacci() {
    const mensaje = document.getElementById("mensajeFibonacci");
    mensaje.textContent = "Por favor ingresa un número válido.";
   // COMPLETAR
}

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        // Completar: Asignar el evento
    });
}

module.exports = { fibonacci, generarFibonacci };