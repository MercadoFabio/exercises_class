const { esCapicua } = require("./index.js");

describe("esCapicua", () => {
    test("Debe identificar números capicúa", () => {
        expect(esCapicua(121)).toBe(true);
        expect(esCapicua(12321)).toBe(true);
    });

    test("Debe identificar números no capicúa", () => {
        expect(esCapicua(123)).toBe(false);
        expect(esCapicua(10)).toBe(false);
    });

    test("Debe manejar números de un solo dígito", () => {
        expect(esCapicua(7)).toBe(true);
    });
});
