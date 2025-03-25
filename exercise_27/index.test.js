const { calcularOperacion } = require("./index.js");

describe("Calculadora Científica", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="number" id="inputNumero">
            <select id="operacion">
                <option value="seno"></option>
                <option value="coseno"></option>
            </select>
            <button id="calcular"></button>
            <p id="resultado"></p>
        `;
    });

    test("Debe calcular el seno de un número", () => {
        document.getElementById("inputNumero").value = "30";
        document.getElementById("operacion").value = "seno";
        calcularOperacion();
        expect(document.getElementById("resultado").textContent).toContain("0.5");
    });
});
