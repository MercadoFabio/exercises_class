const { ordenarDescendente } = require("./index.js");

describe("ordenarDescendente", () => {
    test("Debe ordenar un array en orden descendente", () => {
        expect(ordenarDescendente([3, 7, 1, 9])).toEqual([9, 7, 3, 1]);
        expect(ordenarDescendente([-1, 4, 0, 2])).toEqual([4, 2, 0, -1]);
    });

    test("Debe manejar arrays con un solo elemento", () => {
        expect(ordenarDescendente([5])).toEqual([5]);
    });

    test("Debe manejar arrays con números repetidos", () => {
        expect(ordenarDescendente([3, 3, 1, 1])).toEqual([3, 3, 1, 1]);
    });
});
