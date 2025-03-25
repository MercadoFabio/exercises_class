const { enviarMensaje } = require("./index.js");

describe("Chat en Tiempo Real", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="mensaje">
            <button id="enviar"></button>
            <ul id="chat"></ul>
        `;
        localStorage.clear();
    });

    test("Debe enviar y almacenar mensajes", () => {
        document.getElementById("mensaje").value = "Hola mundo";
        enviarMensaje();
        expect(document.querySelectorAll("#chat li").length).toBe(1);
    });
});
