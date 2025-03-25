# Conversor de Números (Binario, Decimal, Romano)

## Descripción
Crea una aplicación web que permita al usuario convertir números entre tres sistemas numéricos: binario, decimal y romano. 

El usuario selecciona el sistema de entrada (binario, decimal o romano) y el sistema de salida (binario, decimal o romano), e ingresa el número en el sistema seleccionado. El sistema debe realizar la conversión y mostrar el resultado en el sistema de salida seleccionado.

La aplicación debe manejar entradas incorrectas y mostrar un mensaje adecuado cuando los datos no sean válidos.

## Entrada
- Un número que el usuario desea convertir.
- El sistema numérico de entrada (binario, decimal o romano).
- El sistema numérico de salida (binario, decimal o romano).

## Salida
- El número convertido al sistema seleccionado de salida.
- Si la entrada es inválida, mostrar el mensaje: "Entrada no válida".

## Ejemplos

### Caso 1: Conversión de Decimal a Binario
**Entrada:**
- Número: `10`
- Sistema de Entrada: `Decimal`
- Sistema de Salida: `Binario`

**Salida:**
- `1010`

### Caso 2: Conversión de Binario a Decimal
**Entrada:**
- Número: `1010`
- Sistema de Entrada: `Binario`
- Sistema de Salida: `Decimal`

**Salida:**
- `10`

### Caso 3: Entrada Inválida
**Entrada:**
- Número: `XYZ`
- Sistema de Entrada: `Decimal`
- Sistema de Salida: `Binario`

**Salida:**
- `Entrada no válida`
