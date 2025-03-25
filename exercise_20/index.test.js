const { convertirNumero } = require("./index.js");

describe("Conversor de Números", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="inputNumero">
            <select id="sistemaEntrada"><option value="decimal"></option></select>
            <select id="sistemaSalida"><option value="binario"></option></select>
            <button id="convertir"></button>
            <p id="resultado"></p>
        `;
    });

    test("Debe convertir decimal a binario", () => {
        document.getElementById("inputNumero").value = "10";
        document.getElementById("sistemaEntrada").value = "decimal";
        document.getElementById("sistemaSalida").value = "binario";
        convertirNumero();
        expect(document.getElementById("resultado").textContent).toBe("1010");
    });

    test("Debe manejar entradas inválidas", () => {
        document.getElementById("inputNumero").value = "XYZ";
        convertirNumero();
        expect(document.getElementById("resultado").textContent).toBe("Entrada no válida");
    });
});
