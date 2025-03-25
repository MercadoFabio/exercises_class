const { agregarTarea, eliminarTarea } = require("./index.js");

describe("To-Do List", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="nuevaTarea">
            <button id="agregarTarea"></button>
            <ul id="listaTareas"></ul>
        `;
        localStorage.clear();
    });

    test("Debe agregar una tarea a la lista", () => {
        document.getElementById("nuevaTarea").value = "Comprar pan";
        agregarTarea();
        expect(document.querySelectorAll("#listaTareas li").length).toBe(1);
    });

    test("Debe eliminar una tarea de la lista", () => {
        document.getElementById("nuevaTarea").value = "Comprar pan";
        agregarTarea();
        const eliminarButton = document.querySelector("#listaTareas li button");
        eliminarTarea({ target: eliminarButton });
        expect(document.querySelectorAll("#listaTareas li").length).toBe(0);
    });

    test("Debe guardar las tareas en localStorage", () => {
        document.getElementById("nuevaTarea").value = "Comprar pan";
        agregarTarea();
        const tareas = JSON.parse(localStorage.getItem("tareas"));
        expect(tareas.length).toBe(1);
        expect(tareas[0].texto).toBe("Comprar pan");
    });
});