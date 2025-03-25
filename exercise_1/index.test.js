const { buscarElemento } = require("./index.js");


describe("buscarElemento", () => {
    test("Debe encontrar elementos en el array", () => {
        expect(buscarElemento([1, 2, 3, 4], 3)).toBe(true);
        expect(buscarElemento(["manzana", "pera", "uva"], "pera")).toBe(true);
    });

    test("Debe devolver false si el elemento no está", () => {
        expect(buscarElemento([10, 20, 30], 40)).toBe(false);
    });

    test("Debe manejar arrays vacíos", () => {
        expect(buscarElemento([], 1)).toBe(false);
    });
});
