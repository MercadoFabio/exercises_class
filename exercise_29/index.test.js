const { probarLetra } = require("./index.js");

describe("Juego del Ahorcado", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p id="palabraOculta">_ _ _ _</p>
            <input type="text" id="letra">
            <button id="probarLetra"></button>
            <p id="mensaje"></p>
        `;
    });

    test("Debe revelar letras correctas", () => {
        document.getElementById("letra").value = "a";
        probarLetra();
        expect(document.getElementById("palabraOculta").textContent).not.toBe("_ _ _ _");
    });
});
