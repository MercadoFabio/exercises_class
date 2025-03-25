# Generador de Secuencia de Fibonacci con Límite

## Descripción
Crea una aplicación web donde el usuario ingresa un número `N` y se genera la secuencia de Fibonacci hasta ese número. La secuencia debe mostrarse en pantalla y validarse para que el número ingresado sea mayor que 0.

La aplicación también debe guardar el último número ingresado en el `localStorage` y cargarlo automáticamente al abrir la página.

## Entrada
- Un número entero `N` que representa el límite hasta donde se generará la secuencia de Fibonacci.

## Salida
- La secuencia de Fibonacci hasta el número `N`.
- Un mensaje de error si el número ingresado no es válido o si es menor o igual a 0: "Por favor ingresa un número válido."

## Ejemplos

### Caso 1: Generación de la secuencia de Fibonacci
**Entrada:**
- Número: `10`

**Salida:**
- Secuencia de Fibonacci: `0, 1, 1, 2, 3, 5, 8`

### Caso 2: Entrada inválida
**Entrada:**
- Número: `-5`

**Salida:**
- Mensaje: "Por favor ingresa un número válido."

### Caso 3: Carga de número desde `localStorage`
Si el usuario ha ingresado previamente el número `10`, al cargar la página se debe cargar automáticamente ese número desde `localStorage` y generar la secuencia de Fibonacci hasta `10` nuevamente.
