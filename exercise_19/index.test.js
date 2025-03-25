let { verificarNumero, setNumeroSecreto } = require("./index.js");

describe("Juego de Adivinanza", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="inputNumero">
            <button id="verificarNumero"></button>
            <p id="mensaje"></p>
            <p id="estadisticas"></p>
        `;
        localStorage.clear();
        setNumeroSecreto(30);
    });

    test("Debe detectar cuando el usuario acierta", () => {
        document.getElementById("inputNumero").value = "30";
        verificarNumero();
        expect(document.getElementById("mensaje").textContent).toBe("¡Correcto! Adivinaste el número en 1 intentos.");
    });

    test("Debe mostrar si el número es mayor o menor", () => {
        document.getElementById("inputNumero").value = "50";
        verificarNumero();
        let mensaje = document.getElementById("mensaje").textContent;
        expect(mensaje.includes("mayor")).toBe(true);
    });

    test("Debe guardar las estadísticas en localStorage", () => {
        document.getElementById("inputNumero").value = "30";
        verificarNumero();
        const estadisticas = JSON.parse(localStorage.getItem("estadisticas"));
        expect(estadisticas.partidas).toBe(1);
    });
});