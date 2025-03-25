# Juego de Adivinanza con Estadísticas Guardadas

## Descripción
Crea un juego en el que el usuario debe adivinar un número aleatorio entre 1 y 100. El sistema debe indicar si el número ingresado es mayor o menor que el número secreto hasta que el usuario lo adivine. 

Los intentos del usuario deben ser guardados en el `localStorage`, y se deben mostrar las estadísticas de las partidas anteriores, como el número total de partidas jugadas y el promedio de intentos.

## Entrada
- Un número entero entre 1 y 100 ingresado por el usuario.

## Salida
- Mensajes indicando si el número es mayor o menor que el número secreto.
- Mensaje de victoria cuando el usuario adivine el número: 
  - "¡Correcto! Adivinaste el número en X intentos."
- Estadísticas de las partidas anteriores:
  - Número total de partidas jugadas.
  - Promedio de intentos por partida.

## Ejemplos

### Caso 1:
**Entrada:**
- El usuario ingresa `50` y el número secreto es `30`.

**Salida:**
- "El número es menor."

### Caso 2:
**Entrada:**
- El usuario ingresa `30` y el número secreto es `30`.

**Salida:**
- "¡Correcto! Adivinaste el número."

### Caso 3:
**Estadísticas:**
- Número total de partidas: `3`
- Promedio de intentos: `4.5`
