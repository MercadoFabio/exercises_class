const { verificarNumero } = require("./index.js");

describe("Juego de Adivinanza", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="inputNumero">
            <button id="verificarNumero"></button>
            <p id="mensaje"></p>
        `;
    });

    test("Debe mostrar si el número es mayor o menor", () => {
        document.getElementById("inputNumero").value = "50";
        verificarNumero();
        let mensaje = document.getElementById("mensaje").textContent;
        expect(mensaje.includes("mayor") || mensaje.includes("menor")).toBe(true);
    });

    test("Debe detectar cuando el usuario acierta", () => {
        global.numeroSecreto = 30;
        document.getElementById("inputNumero").value = "30";
        verificarNumero();
        expect(document.getElementById("mensaje").textContent).toBe("¡Correcto! Adivinaste el número.");
    });
});
