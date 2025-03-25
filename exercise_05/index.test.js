const { numeroMenor } = require("./index.js");

describe("numeroMenor", () => {
    test("Debe encontrar el número menor en un array", () => {
        expect(numeroMenor([10, 20, 5, 30])).toBe(5);
        expect(numeroMenor([-5, -1, -10])).toBe(-10);
    });

    test("Debe manejar arrays con un solo elemento", () => {
        expect(numeroMenor([3])).toBe(3);
    });

    test("Debe manejar arrays con números iguales", () => {
        expect(numeroMenor([4, 4, 4])).toBe(4);
    });
});
