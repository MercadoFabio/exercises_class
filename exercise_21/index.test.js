const { fibonacci, generarFibonacci } = require("./index.js");

describe("Generador de Fibonacci", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="inputFibonacci">
            <button id="generarFibonacci"></button>
            <p id="mensajeFibonacci"></p>
            <ul id="listaFibonacci"></ul>
        `;
    });

    test("Debe generar la secuencia de Fibonacci correctamente", () => {
        document.getElementById("inputFibonacci").value = "10";
        generarFibonacci();
        expect(document.querySelectorAll("#listaFibonacci li").length).toBe(7);
    });

    test("Debe manejar entradas no válidas", () => {
        document.getElementById("inputFibonacci").value = "-5";
        generarFibonacci();
        expect(document.getElementById("mensajeFibonacci").textContent).toBe("Por favor ingresa un número válido.");
    });

    test("Debe guardar las tareas en localStorage", () => {
        document.getElementById("inputFibonacci").value = "10";
        generarFibonacci();
        expect(localStorage.getItem("ultimoNumeroFibonacci")).toBe("10");
    });
});