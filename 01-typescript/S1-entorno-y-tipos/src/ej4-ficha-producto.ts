// =====================================================================
// EJERCICIO 4 · Ficha de producto  (ejercicio de integración)
//
// Ejecutar con:  node S1-entorno-y-tipos/src/ej4-ficha-producto.ts
// Comprobar con: npm run check
//
// OBJETIVO: imprimir EXACTAMENTE esto (los espacios y el orden cuentan):
//
//   === Teclado mecánico ===
//   Precio unidad: 89.90 €
//   Unidades: 3
//   Descuento: no aplicado
//   TOTAL: 269.70 €
//
// Y que al cambiar `descuentoPorcentaje` de null a 10, salga esto:
//
//   === Teclado mecánico ===
//   Precio unidad: 89.90 €
//   Unidades: 3
//   Descuento: 10 %
//   TOTAL: 242.73 €
//
// Los datos de partida están dados. NO los cambies (salvo el descuento
// para la segunda comprobación).
// =====================================================================

const nombre = "Teclado mecánico";
const precioUnidad = 89.9;
const unidades = 3;
const descuentoPorcentaje: number | null = null;


// --- 4.1 -------------------------------------------------------------
// TODO: calcula el total SIN descuento (precio × unidades) en una
// constante `subtotal`.


// --- 4.2 -------------------------------------------------------------
// TODO: calcula el `total` aplicando el descuento SI lo hay.
// Necesitas:
//   - un `let total: number` (¿por qué let y no const? piénsalo)
//   - un `if` que compruebe si `descuentoPorcentaje` es null
// Recuerda que TypeScript no te dejará usar `descuentoPorcentaje` en un
// cálculo hasta que hayas descartado el null.


// --- 4.3 -------------------------------------------------------------
// TODO: prepara la línea del descuento en una constante `lineaDescuento`
// de tipo string, que valga:
//   - "no aplicado"          si descuentoPorcentaje es null
//   - "10 %"                 si vale 10  (usa la variable, no el 10 a mano)
// Puedes reutilizar el mismo `if` del punto anterior o hacer otro.


// --- 4.4 -------------------------------------------------------------
// TODO: imprime el recibo completo con UNA sola llamada a console.log,
// usando una plantilla multilínea.
// El precio y el total van con 2 decimales (ejercicio 3, punto 3.2).


// --- 4.5 · Comprobación ----------------------------------------------
// Cambia arriba `descuentoPorcentaje` a 10, vuelve a ejecutar y
// comprueba que coincide con la segunda salida esperada.
// Después déjalo como quieras.
//
// ¿Ha salido el total exacto o te ha aparecido algún decimal raro?
// →


// --- 4.6 · Pregunta --------------------------------------------------
// Este fichero tiene 4 variables sueltas (nombre, precio, unidades,
// descuento) que en realidad describen UNA sola cosa: un producto.
// En C# usarías una clase o un struct. ¿Cómo crees que se agrupan en
// TypeScript? No hace falta que aciertes: es el tema de la sesión 2.
// →
