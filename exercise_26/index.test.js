const { cargarImagenes } = require("./index.js");

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ download_url: "https://picsum.photos/200" }])
    })
);

describe("Galería de Imágenes", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="cargarImagenes"></button>
            <div id="galeria"></div>
        `;
    });

    test("Debe cargar imágenes desde la API", async () => {
        await cargarImagenes();
        expect(document.querySelectorAll("#galeria img").length).toBeGreaterThan(0);
    });
});
