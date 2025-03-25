const { numeroMayor } = require("./index.js");

describe("numeroMayor", () => {
    test("Debe encontrar el número mayor en un array", () => {
        expect(numeroMayor([1, 3, 7, 2, 5])).toBe(7);
        expect(numeroMayor([-10, -3, -20])).toBe(-3);
    });

    test("Debe manejar arrays con un solo elemento", () => {
        expect(numeroMayor([8])).toBe(8);
    });

    test("Debe manejar arrays con números iguales", () => {
        expect(numeroMayor([5, 5, 5, 5])).toBe(5);
    });
});
