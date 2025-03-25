const { esArmstrong } = require("./index.js");

describe("esArmstrong", () => {
    test("Debe identificar números Armstrong", () => {
        expect(esArmstrong(153)).toBe(true);
        expect(esArmstrong(9474)).toBe(true);
    });

    test("Debe identificar números que no son Armstrong", () => {
        expect(esArmstrong(123)).toBe(false);
    });
});
