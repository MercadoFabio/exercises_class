const { ordenarAscendente } = require("./index.js");

describe("ordenarAscendente", () => {
    test("Debe ordenar un array en orden ascendente", () => {
        expect(ordenarAscendente([5, 3, 8, 1])).toEqual([1, 3, 5, 8]);
        expect(ordenarAscendente([10, -2, 0, 3])).toEqual([-2, 0, 3, 10]);
    });

    test("Debe manejar arrays con un solo elemento", () => {
        expect(ordenarAscendente([7])).toEqual([7]);
    });

    test("Debe manejar arrays con elementos repetidos", () => {
        expect(ordenarAscendente([4, 4, 2, 2])).toEqual([2, 2, 4, 4]);
    });
});
