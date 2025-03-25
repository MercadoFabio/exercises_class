const { romanoAEntero } = require("./index.js");

describe("romanoAEntero", () => {
    test("Debe convertir números romanos simples", () => {
        expect(romanoAEntero("III")).toBe(3);
        expect(romanoAEntero("X")).toBe(10);
    });

    test("Debe convertir números romanos con sustracción", () => {
        expect(romanoAEntero("IX")).toBe(9);
        expect(romanoAEntero("XL")).toBe(40);
    });

    test("Debe convertir números romanos largos", () => {
        expect(romanoAEntero("MCMXCIV")).toBe(1994);
    });

    test("Debe manejar valores no válidos", () => {
        expect(romanoAEntero("ABCD")).toBe(null);
    });
});
