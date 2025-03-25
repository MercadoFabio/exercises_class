const { binarioADecimal } = require("./index.js");

describe("binarioADecimal", () => {
    test("Debe convertir correctamente binarios a decimales", () => {
        expect(binarioADecimal("1101")).toBe(13);
        expect(binarioADecimal("1001")).toBe(9);
    });

    test("Debe manejar valores pequeños", () => {
        expect(binarioADecimal("1")).toBe(1);
        expect(binarioADecimal("0")).toBe(0);
    });
});
