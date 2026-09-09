# S1 · Ejercicios

**Tiempo previsto:** ~40 min los cuatro.
**Antes de empezar:** abre una terminal en la carpeta del bloque:

```bash
cd C:\Users\JaimeStihl\Documents\mi-formacion-stack-web\01-typescript
```

Todos los comandos de aquí abajo se lanzan desde ahí. Las dependencias ya están instaladas.

Los ficheros están en `S1-entorno-y-tipos/src/`. Cada uno tiene instrucciones dentro y marcas
`TODO` donde tienes que escribir. **No borres los comentarios** — me sirven al corregir para ver
qué te pedía cada punto.

> Si te atascas más de 5 minutos en un punto, déjalo con un comentario `// no sé cómo` y sigue.
> Eso me dice más que una solución copiada, y lo explicamos en la corrección.

---

## Ejercicio 1 · Tu primer TypeScript (~8 min)

**Fichero:** `src/ej1-hola.ts`

Declarar variables con y sin anotación de tipo, y componer texto con plantillas.

```bash
node S1-entorno-y-tipos/src/ej1-hola.ts
```

**Hecho cuando:** imprime las 4 líneas que pide el fichero, sin `undefined` por ningún lado.

---

## Ejercicio 2 · Arreglar los tipos (~10 min)

**Fichero:** `src/ej2-arreglar-tipos.ts`

Este fichero tiene **5 errores de tipos puestos a propósito**. Tu trabajo es hacer que
`npm run check` pase limpio, sin borrar líneas: hay que *arreglar*, no *eliminar*.

```bash
npm run check
```

⚠️ **Este es el único fichero del curso que a propósito NO pasa `npm run check` al empezar.** Si
ves errores, es lo esperado. Los demás ficheros salen limpios de fábrica: si alguno se queja sin que
tú lo hayas tocado, es un fallo mío y quiero saberlo.

Dos cosas que hacer, en este orden:

1. Antes de arreglar nada, ejecuta `node S1-entorno-y-tipos/src/ej2-arreglar-tipos.ts`. **Funciona,
   a pesar de los 5 errores.** Ese es el punto §3 de la teoría en vivo.
2. Arregla los 5 hasta que `npm run check` no diga nada.

**Hecho cuando:** `npm run check` no imprime ningún error.

---

## Ejercicio 3 · Un solo tipo numérico (~10 min)

**Fichero:** `src/ej3-numeros.ts`

Ejercicio de predicción. Para cada expresión, **escribe primero** en el comentario qué crees que va
a imprimir, y **luego** ejecuta el fichero y compara.

Escribir la predicción antes es lo que hace útil el ejercicio: acertar no enseña nada, fallar sí.
No pasa nada por fallar la mitad — yo también fallaría alguna.

```bash
node S1-entorno-y-tipos/src/ej3-numeros.ts
```

**Hecho cuando:** las 6 predicciones están escritas y has anotado cuáles fallaste.

---

## Ejercicio 4 · Ficha de producto (~12 min)

**Fichero:** `src/ej4-ficha-producto.ts`

El de integración: junta variables, tipos, `null`, un `if` y una plantilla multilínea para
imprimir un recibo con este aspecto exacto:

```
=== Teclado mecánico ===
Precio unidad: 89.90 €
Unidades: 3
Descuento: no aplicado
TOTAL: 269.70 €
```

**Hecho cuando:** el recibo sale con ese formato, `npm run check` pasa limpio, y has comprobado que
cambiando el descuento a `10` la línea de descuento y el total cambian en consecuencia.

---

## Al terminar

1. Comprueba que todo el bloque está limpio:
   ```bash
   npm run check
   ```
2. Anota en [../../PROGRESO.md](../../PROGRESO.md) cuánto has tardado de verdad (teoría y
   ejercicios). Sirve para calibrar la sesión siguiente.
3. Dime: **"corrígeme la sesión 1"**. Leeré tus cuatro ficheros y te daré, línea a línea, qué está
   bien, qué está mal y por qué. Trae también las dudas que te hayan surgido: responderlas es parte
   de la corrección, no una interrupción.
