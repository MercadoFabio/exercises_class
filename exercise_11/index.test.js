const { factorial } = require("./index.js");

describe("factorial", () => {
    test("Debe calcular el factorial correctamente", () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(3)).toBe(6);
    });

    test("El factorial de 0 es 1", () => {
        expect(factorial(0)).toBe(1);
    });
});
