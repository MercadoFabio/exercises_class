const { segundoMayor } = require("./index.js");

describe("segundoMayor", () => {
    test("Debe encontrar el segundo número mayor", () => {
        expect(segundoMayor([5, 10, 8, 12])).toBe(10);
        expect(segundoMayor([1, 2, 3, 4, 5])).toBe(4);
    });

    test("Debe manejar arrays con números repetidos", () => {
        expect(segundoMayor([7, 7, 5, 5])).toBe(5);
    });

    test("Debe retornar null si hay menos de dos elementos", () => {
        expect(segundoMayor([4])).toBeNull();
    });
});
