# S2 · Ejercicios

**Tiempo previsto:** ~40 min los cuatro.
**Terminal:** en `01-typescript/`, como en S1.

```bash
node S2-funciones-y-objetos/src/ej1-funciones.ts
npm run check
```

Los cuatro ficheros salen limpios de fábrica: si `npm run check` se queja de algo que no has
tocado, es fallo mío. En esta sesión no hay ningún fichero con errores a propósito.

---

## Ejercicio 1 · Funciones (~10 min)

**Fichero:** `src/ej1-funciones.ts`

Convertir en funciones los cálculos que en S1 estaban sueltos: euros a céntimos, formateo de
importes, IVA con valor por defecto y un parámetro opcional.

**Hecho cuando:** las 6 llamadas de prueba del final imprimen lo que dice cada comentario.

---

## Ejercicio 2 · `type` y objetos (~10 min)

**Fichero:** `src/ej2-tipos-objeto.ts`

Aquí está la respuesta a tu pregunta 4.6: el recibo de S1, pero con el producto como **una sola
cosa**. Defines `type Producto`, escribes dos productos y una función que genera la ficha.

**Hecho cuando:** salen las dos fichas completas, con el descuento resuelto en cada una.

---

## Ejercicio 3 · Tipado estructural (~10 min)

**Fichero:** `src/ej3-estructural.ts`

Ejercicio de predicción, como el de números de S1, pero sobre si algo **compila** o no. Cada caso
está comentado: predices primero, descomentas después, ejecutas `npm run check`, y vuelves a
comentar antes de pasar al siguiente.

**Importante:** trabaja **un caso cada vez**. Si descomentas todos a la vez no sabrás qué error
viene de dónde.

**Hecho cuando:** los 5 casos tienen predicción y resultado, y el fichero queda con todo comentado
otra vez (`npm run check` limpio).

---

## Ejercicio 4 · Un array de productos (~12 min)

**Fichero:** `src/ej4-catalogo.ts`

El de integración: un array de 4 productos, funciones que lo recorren con un `for` clásico, y un
resumen del catálogo.

Sí, con `for`. Es la última vez que lo escribes: en S3 vas a rehacer este mismo ejercicio con
`map`, `filter` y `reduce`, y la comparación entre las dos versiones es justo lo que quiero que
veas.

**Hecho cuando:** el resumen imprime los 4 productos, el total del catálogo y el más caro.

---

## Al terminar

1. `npm run check` limpio.
2. Anota los tiempos reales en [../../PROGRESO.md](../../PROGRESO.md).
3. Dime **"corrígeme la sesión 2"**, o pídeme la corrección ejercicio a ejercicio como en S1 — las
   dos formas van bien.

### Cosas que arrastras de S1 y quiero ver aplicadas

- `const` por defecto; `let` solo si reasignas de verdad.
- Nada de valores iniciales falsos (`let x: number = 0`) cuando vas a asignar en todas las ramas.
- Importes en céntimos (enteros), y `toFixed(2)` solo al imprimir.
- Plantillas pegadas al margen izquierdo si no quieres espacios en la salida.
