const { iniciarCronometro, pausarCronometro, reiniciarCronometro } = require("./index.js");

describe("Cronómetro", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <p id="tiempo">0:00</p>
            <button id="iniciar"></button>
            <button id="pausar"></button>
            <button id="reiniciar"></button>
        `;
    });

    test("Debe iniciar y actualizar el cronómetro", () => {
        iniciarCronometro();
        setTimeout(() => {
            expect(document.getElementById("tiempo").textContent).not.toBe("0:00");
        }, 2000);
    });

    test("Debe pausar el cronómetro", () => {
        iniciarCronometro();
        setTimeout(() => {
            pausarCronometro();
            let tiempo = document.getElementById("tiempo").textContent;
            setTimeout(() => {
                expect(document.getElementById("tiempo").textContent).toBe(tiempo);
            }, 2000);
        }, 2000);
    });

    test("Debe reiniciar el cronómetro", () => {
        iniciarCronometro();
        setTimeout(() => {
            reiniciarCronometro();
            expect(document.getElementById("tiempo").textContent).toBe("0:00");
        }, 3000);
    });
});
