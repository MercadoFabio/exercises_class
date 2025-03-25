const { sumarPares } = require("./index.js");

describe("sumarPares", () => {
    test("Debe sumar correctamente los números pares", () => {
        expect(sumarPares([1, 2, 3, 4, 5, 6])).toBe(12);
        expect(sumarPares([10, 15, 20, 25])).toBe(30);
    });

    test("Debe devolver 0 si no hay números pares", () => {
        expect(sumarPares([1, 3, 5])).toBe(0);
    });
});
