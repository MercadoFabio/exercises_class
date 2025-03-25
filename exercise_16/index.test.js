const { numeroUnico } = require("./index.js");

describe("numeroUnico", () => {
    test("Debe encontrar el número que no tiene repetición", () => {
        expect(numeroUnico([4, 3, 2, 4, 1, 3, 2])).toBe(1);
        expect(numeroUnico([5, 5, 6, 7, 7])).toBe(6);
    });

    test("Debe manejar arrays con un solo número", () => {
        expect(numeroUnico([9])).toBe(9);
    });

    test("Debe manejar arrays más grandes", () => {
        expect(numeroUnico([10, 10, 20, 20, 30, 30, 40])).toBe(40);
    });
});
