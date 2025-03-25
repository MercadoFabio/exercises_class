const { sumaDigitos } = require("./index.js");

describe("sumaDigitos", () => {
    test("Debe reducir un número a un solo dígito", () => {
        expect(sumaDigitos(942)).toBe(6);
        expect(sumaDigitos(132189)).toBe(6);
    });

    test("Debe devolver el mismo número si ya es un solo dígito", () => {
        expect(sumaDigitos(7)).toBe(7);
    });

    test("Debe manejar números grandes", () => {
        expect(sumaDigitos(9875)).toBe(2); // 9+8+7+5=29 → 2+9=11 → 1+1=2
    });
});
