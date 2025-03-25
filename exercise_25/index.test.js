const { agregarTarea, eliminarTarea } = require("./index.js");

describe("To-Do List", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="nuevaTarea">
            <button id="agregarTarea"></button>
            <ul id="listaTareas"></ul>
        `;
    });

    test("Debe agregar una tarea a la lista", () => {
        document.getElementById("nuevaTarea").value = "Comprar pan";
        agregarTarea();
        expect(document.querySelectorAll("#listaTareas li").length).toBe(1);
    });

    test("Debe eliminar una tarea de la lista", () => {
        document.getElementById("nuevaTarea").value = "Comprar pan";
        agregarTarea();
        eliminarTarea({ target: document.querySelector("#listaTareas li") });
        expect(document.querySelectorAll("#listaTareas li").length).toBe(0);
    });
});
