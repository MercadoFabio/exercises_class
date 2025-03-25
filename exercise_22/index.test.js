const { ordenarArray,manejarOrdenamiento, buscarEnArray } = require("./index.js");

describe("Ordenar y Buscar en un Array", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="inputArray">
            <button id="ordenarArray"></button>
            <button id="buscarNumero"></button>
            <input type="number" id="inputBusqueda">
            <p id="resultadoOrden"></p>
            <p id="resultadoBusqueda"></p>
        `;
    });

    test("Debe ordenar correctamente un array", () => {
        document.getElementById("inputArray").value = "10,5,3,8";
        manejarOrdenamiento();
        expect(document.getElementById("resultadoOrden").textContent).toBe("Ordenado: 3, 5, 8, 10");
    });

    test("Debe encontrar un número dentro del array", () => {
        document.getElementById("inputArray").value = "10,5,3,8";
        document.getElementById("inputBusqueda").value = "5";
        buscarEnArray();
        expect(document.getElementById("resultadoBusqueda").textContent).toBe("Número encontrado");
    });
});
