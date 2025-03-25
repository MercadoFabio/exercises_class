const { registrarUsuario, mostrarUsuarios } = require("./index.js");

describe("Formulario de Registro de Usuarios", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="text" id="nombre">
            <input type="email" id="correo">
            <button id="registrar"></button>
            <ul id="listaUsuarios"></ul>
            <div id="mensajeError"></div>
        `;

        localStorage.clear(); // Limpiar almacenamiento antes de cada prueba
    });

    test("Debe registrar un usuario correctamente", () => {
        document.getElementById("nombre").value = "Juan Pérez";
        document.getElementById("correo").value = "juan@example.com";

        registrarUsuario();

        const listaUsuarios = document.getElementById("listaUsuarios").innerHTML;
        expect(listaUsuarios.includes("Juan Pérez - juan@example.com")).toBe(true);
    });

    test("No debe registrar un usuario con un nombre vacío", () => {
        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "juan@example.com";

        registrarUsuario();

        const listaUsuarios = document.getElementById("listaUsuarios").innerHTML;
        expect(listaUsuarios).toBe(""); // La lista debe seguir vacía
    });

    test("No debe registrar un usuario con un correo inválido", () => {
        document.getElementById("nombre").value = "Juan Pérez";
        document.getElementById("correo").value = "juan.com";

        registrarUsuario();

        const listaUsuarios = document.getElementById("listaUsuarios").innerHTML;
        expect(listaUsuarios).toBe(""); // No se debe agregar el usuario
    });

    test("Debe almacenar los usuarios en localStorage", () => {
        document.getElementById("nombre").value = "Ana Gómez";
        document.getElementById("correo").value = "ana@example.com";

        registrarUsuario();

        const almacenados = JSON.parse(localStorage.getItem("usuarios"));
        expect(almacenados.length).toBe(1);
        expect(almacenados[0]).toEqual({ nombre: "Ana Gómez", correo: "ana@example.com" });
    });

    test("Debe recuperar usuarios almacenados en localStorage al recargar", () => {
        localStorage.setItem("usuarios", JSON.stringify([{ nombre: "Carlos López", correo: "carlos@example.com" }]));

        mostrarUsuarios();

        const listaUsuarios = document.getElementById("listaUsuarios").innerHTML;
        expect(listaUsuarios.includes("Carlos López - carlos@example.com")).toBe(true);
    });
});