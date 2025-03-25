# Ejercicio 24: Cronómetro con Inicio, Pausa y Reinicio

## Descripción
Este proyecto consiste en la creación de un cronómetro con tres funcionalidades básicas: inicio, pausa y reinicio. El cronómetro debe mostrar el tiempo en el formato `mm:ss` y debe ser interactivo mediante tres botones:

- **Iniciar**: Comienza a contar el tiempo.
- **Pausar**: Detiene el cronómetro sin reiniciar el tiempo transcurrido.
- **Reiniciar**: Vuelve el cronómetro a `0:00` y detiene cualquier contador en curso.

## Entrada
- El cronómetro no requiere una entrada explícita por parte del usuario, pero se interactúa con él mediante tres botones:
  - **Iniciar**: Para empezar a contar el tiempo.
  - **Pausar**: Para detener el cronómetro.
  - **Reiniciar**: Para reiniciar el cronómetro a `0:00`.

## Salida
- El cronómetro muestra el tiempo transcurrido en formato `mm:ss` en el elemento con `id="tiempo"`.
- Cuando se presiona **Iniciar**, el cronómetro comienza a contar.
- Cuando se presiona **Pausar**, el cronómetro se detiene en el valor actual sin reiniciar.
- Cuando se presiona **Reiniciar**, el cronómetro vuelve a `0:00`.

## Ejemplos

### Caso 1: Iniciar el cronómetro
**Entrada:**
- Hacer clic en el botón **Iniciar**.

**Salida:**
- El cronómetro comienza a contar desde `0:00`.

### Caso 2: Pausar el cronómetro
**Entrada:**
- Hacer clic en el botón **Iniciar** para comenzar el cronómetro.
- Después de algunos segundos, hacer clic en el botón **Pausar**.

**Salida:**
- El cronómetro se detiene en el tiempo actual y ya no avanza.

### Caso 3: Reiniciar el cronómetro
**Entrada:**
- Hacer clic en el botón **Iniciar** para comenzar el cronómetro.
- Después de algunos segundos, hacer clic en el botón **Reiniciar**.

**Salida:**
- El cronómetro se reinicia a `0:00` y se detiene.

## Requisitos
- El cronómetro debe funcionar correctamente con la interacción del usuario mediante los botones.
- Los eventos deben estar bien asignados a los botones correspondientes para que el cronómetro inicie, se pause o se reinicie.

## Desafío (Opcional)
Agrega un botón de **"Vuelta"** para registrar el tiempo actual cada vez que se presione el botón. Este botón debe mostrar el tiempo en el que se encuentra el cronómetro en una lista guardada en `localStorage`. La funcionalidad del botón **Vuelta** debe ser tal que:
- Al presionar el botón, se registre el tiempo transcurrido en ese momento (en formato `mm:ss`), sin reiniciar el mismo.
- Se debe agregar el tiempo de vuelta en una lista debajo del cronómetro o en una sección separada, con cada vuelta mostrada con su respectivo tiempo.
  