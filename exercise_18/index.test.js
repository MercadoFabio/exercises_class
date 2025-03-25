const { numeroPerdido } = require("./index.js");

describe("numeroPerdido", () => {
    test("Debe encontrar el número perdido en una secuencia", () => {
        expect(numeroPerdido([1, 2, 3, 5])).toBe(4);
        expect(numeroPerdido([10, 11, 12, 14, 15])).toBe(13);
    });

    test("Debe devolver null si no falta ningún número", () => {
        expect(numeroPerdido([1, 2, 3, 4, 5])).toBeNull();
    });

    test("Debe manejar secuencias largas correctamente", () => {
        expect(numeroPerdido([100, 101, 102, 104, 105])).toBe(103);
    });
});
