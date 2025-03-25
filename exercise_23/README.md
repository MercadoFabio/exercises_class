# Ejercicio 23: Formulario de Registro con Validaciones y Almacenamiento

## Descripción
Crea un formulario donde los usuarios puedan registrar su nombre y correo electrónico. El sistema debe validar que los datos ingresados sean correctos antes de guardarlos. Los registros de los usuarios deben almacenarse en el `localStorage` y mostrarse en una lista.

## Entrada
- **Nombre**: Un campo de texto donde el usuario debe ingresar su nombre.
- **Correo**: Un campo de texto donde el usuario debe ingresar su correo electrónico.

## Salida
- **Lista de usuarios registrados**: Los usuarios deben mostrarse en una lista con el formato "Nombre - Correo".
- **Mensajes de error**:
  - Si el nombre o correo están vacíos o el correo es inválido, no se registrará al usuario.
  - Si el correo no tiene un formato válido, el sistema debe mostrar un mensaje de error y no registrar al usuario.

## Funcionalidades
- Validación de campos: Se valida que el nombre no esté vacío y que el correo tenga un formato correcto (con un `@` y un dominio).
- Almacenamiento en `localStorage`: Los usuarios se guardan en el `localStorage` para persistencia entre recargas.
- Recarga de datos: Al recargar la página, los usuarios previamente registrados se deben cargar desde el `localStorage` y mostrar en la lista.

## Ejemplos

### Caso 1: Registrar un usuario correctamente
**Entrada:**
- Nombre: `Juan Pérez`
- Correo: `juan@example.com`

**Salida:**
- `Juan Pérez - juan@example.com` aparecerá en la lista de usuarios.

### Caso 2: No registrar un usuario con nombre vacío
**Entrada:**
- Nombre: (vacío)
- Correo: `juan@example.com`

**Salida:**
- La lista de usuarios no se actualiza (queda vacía).

### Caso 3: No registrar un usuario con correo inválido
**Entrada:**
- Nombre: `Juan Pérez`
- Correo: `juan.com`

**Salida:**
- La lista de usuarios no se actualiza.

### Caso 4: Almacenar usuarios en `localStorage`
**Entrada:**
- Nombre: `Ana Gómez`
- Correo: `ana@example.com`

**Salida:**
- El usuario se guarda en el `localStorage` y permanece después de recargar la página.

### Caso 5: Recuperar usuarios desde `localStorage` al
