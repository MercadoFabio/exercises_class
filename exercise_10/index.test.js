const { esAnagrama } = require("./index.js");

describe("esAnagrama", () => {
    test("Debe identificar anagramas", () => {
        expect(esAnagrama("roma", "amor")).toBe(true);
        expect(esAnagrama("listen", "silent")).toBe(true);
    });

    test("Debe identificar palabras que no son anagramas", () => {
        expect(esAnagrama("hola", "adios")).toBe(false);
    });
});
