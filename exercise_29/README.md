# Juego del Ahorcado

Este es un juego interactivo del ahorcado en el que los jugadores deben adivinar una palabra secreta. Cada vez que un jugador ingresa una letra, el juego revela si la letra está en la palabra secreta o no. El jugador tiene un número limitado de intentos para adivinar la palabra antes de perder el juego.

## Descripción

El juego del Ahorcado permite al usuario ingresar letras y probar si esas letras están en la palabra secreta. Si adivina todas las letras correctamente, gana el juego. Si se quedan sin intentos, pierde. El juego muestra el progreso de la palabra oculta y el número de intentos restantes.

### Características

- El jugador puede intentar adivinar la palabra ingresando una letra a la vez.
- Si la letra está en la palabra, se revela en el lugar correspondiente.
- Si la letra no está en la palabra, se pierde un intento.
- El juego termina cuando el jugador adivina la palabra o se queda sin intentos.
- Los intentos restantes se muestran al jugador.

## Entrada

- Un campo de texto donde el jugador puede ingresar una letra.
- Un botón para intentar la letra.
- Un área para mostrar la palabra oculta y los intentos restantes.

## Salida

- Se muestra la palabra oculta con las letras reveladas y los guiones bajos para las letras no adivinadas.
- Un mensaje indicando si el jugador ha ganado, perdido o si debe seguir intentando.
- El número de intentos restantes.

## Ejemplo

### Estado Inicial:
- Palabra oculta: `_ _ _ _`
- Intentos restantes: `6`

### Si el jugador adivina correctamente:
- Palabra oculta: `a _ _ a`
- Mensaje: "¡Bien hecho!"

### Si el jugador adivina incorrectamente:
- Palabra oculta: `_ _ _ _`
- Intentos restantes: `5`
- Mensaje: "Letra incorrecta. Intentos restantes: 5"

### Si el jugador gana:
- Palabra oculta: `j a v a`
- Mensaje: "¡Has ganado!"

### Si el jugador pierde:
- Mensaje: "¡Perdiste! La palabra era: java"
