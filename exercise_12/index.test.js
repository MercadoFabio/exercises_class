const { fibonacci } = require("./index.js");

describe("fibonacci", () => {
    test("Debe calcular correctamente números de Fibonacci", () => {
        expect(fibonacci(5)).toBe(5);
        expect(fibonacci(10)).toBe(55);
    });

    test("Debe manejar valores pequeños", () => {
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
    });
});
