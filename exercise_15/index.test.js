const { subcadenaUnica } = require("./index.js");

describe("subcadenaUnica", () => {
    test("Debe encontrar la longitud de la subcadena sin caracteres repetidos", () => {
        expect(subcadenaUnica("abcabcbb")).toBe(3);
        expect(subcadenaUnica("bbbbb")).toBe(1);
    });

    test("Debe manejar cadenas sin caracteres repetidos", () => {
        expect(subcadenaUnica("abcdef")).toBe(6);
    });

    test("Debe manejar cadenas vacías", () => {
        expect(subcadenaUnica("")).toBe(0);
    });
});
