# Ejercicio 01: Buscar un Elemento en un Array

## Descripción:

Implementa la función `buscarElemento(arr, elemento)`, que recibe un array y un valor a buscar. La función debe devolver `true` si el elemento está presente en el array y `false` en caso contrario.

## Entrada:

- `arr` (Array): Un array que contiene elementos de cualquier tipo (números, strings, booleanos, etc.).
- `elemento` (Any): El valor que se desea buscar dentro del array.

## Salida:

- Retorna `true` si el elemento existe en el array.
- Retorna `false` si el elemento no se encuentra en el array.

## Ejemplos:

```javascript
buscarElemento([1, 2, 3, 4, 5], 3); // true
buscarElemento(["a", "b", "c"], "d"); // false
buscarElemento([true, false, true], false); // true
buscarElemento([], 10); // false
```
