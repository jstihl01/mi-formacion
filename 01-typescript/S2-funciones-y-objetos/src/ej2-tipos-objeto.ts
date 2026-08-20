// =====================================================================
// EJERCICIO 2 · type y objetos
// Ejecutar con:  node S2-funciones-y-objetos/src/ej2-tipos-objeto.ts
//
// El recibo de S1, pero con el producto como UNA sola cosa.
// Esta es la respuesta a tu pregunta 4.6.
// =====================================================================

// --- 2.1 -------------------------------------------------------------
// TODO: define `type Producto` con estos campos:
//     nombre                string
//     precioCentimos        number
//     unidades              number
//     descuentoPorcentaje   number o null
//     fabricante            string, OPCIONAL (puede no estar)
//
// Ojo con los dos "vacíos" de la teoría (§2): descuentoPorcentaje
// SIEMPRE existe y a veces vale null; fabricante puede no existir.
type Producto = {
  nombre: string;
  precioCentimos: number;
  unidades: number;
  descuentoPorcentaje: number | null;
  fabricante?: string;
}

// --- 2.2 -------------------------------------------------------------
// TODO: crea dos constantes de tipo Producto:
//
//   teclado : "Teclado mecánico", 89,90 €, 3 unidades, sin descuento,
//             fabricante "Acme"
//   raton   : "Ratón inalámbrico", 19,90 €, 2 unidades, 10 % de descuento,
//             sin fabricante
//
// Los precios van en CÉNTIMOS, como enteros.
// "Sin descuento" y "sin fabricante" no se expresan igual: piénsalo.
const teclado: Producto = {
  nombre: "Teclado mecánico",
  precioCentimos: 8990,
  unidades: 3,
  descuentoPorcentaje: null,
  fabricante: "Acme",
}
const raton: Producto = {
  nombre: "Ratón inalámbrico",
  precioCentimos: 1990,
  unidades: 2,
  descuentoPorcentaje: 10,
}
// console.log(teclado);
// console.log(raton);

// --- 2.3 -------------------------------------------------------------
// TODO: escribe `subtotalCentimos(p: Producto): number`
// Devuelve precio × unidades, sin descuento.
function subtotalCentimos(p: Producto): number {
  return p.precioCentimos * p.unidades;
}
// console.log(subtotalCentimos(teclado));
// console.log(subtotalCentimos(raton));

// --- 2.4 -------------------------------------------------------------
// TODO: escribe `totalCentimos(p: Producto): number`
// Aplica el descuento si lo hay. Reutiliza `subtotalCentimos`, no
// repitas la multiplicación.
// Redondea a céntimos enteros.
function totalCentimos(p: Producto): number {
  if (p.descuentoPorcentaje !== null) {
    return subtotalCentimos(p) * (1 - p.descuentoPorcentaje / 100);
  }
  return subtotalCentimos(p);
}
// console.log(totalCentimos(raton));

// --- 2.5 -------------------------------------------------------------
// TODO: escribe `formatearEuros(centimos: number): string`
// La misma de ej1. Cópiala aquí (en S3 veremos cómo compartir código
// entre ficheros en lugar de copiarlo).
function formatearEuros(centimos: number): string {
  return `${(centimos / 100).toFixed(2)} €`;
}
// console.log(formatearEuros(totalCentimos(raton)));

// --- 2.6 -------------------------------------------------------------
// TODO: escribe `ficha(p: Producto): string` que DEVUELVA (no imprima)
// este texto exacto, con una plantilla multilínea:
//
//   === Teclado mecánico ===
//   Fabricante: Acme
//   Precio unidad: 89.90 €
//   Unidades: 3
//   Descuento: no aplicado
//   TOTAL: 269.70 €
//
// Reglas:
//   - Si el producto NO tiene fabricante, la línea "Fabricante:" NO debe
//     aparecer en absoluto (ni vacía).
//   - La línea de descuento: "no aplicado" o "10 %", como en S1.
//   - Que la función DEVUELVA el texto en vez de imprimirlo es
//     deliberado: una función que calcula y además imprime hace dos
//     cosas, y eso la vuelve inútil para cualquier otro uso.
//
// Pista para la línea opcional: construye el texto en partes, o usa una
// variable que valga "" cuando no hay fabricante. Hay varias formas
// razonables; elige una y luego te comento el coste de cada una.
function ficha(p: Producto): string {
  const lineaFabricante = p.fabricante !== undefined
    ? `Fabricante: ${p.fabricante}\n`
    : ""
  const lineaDescuento = p.descuentoPorcentaje !== null
    ? `${p.descuentoPorcentaje} %`
    : "no aplicado"

  const plantilla: string = `=== ${p.nombre} ===
${lineaFabricante}Precio unidad: ${formatearEuros(p.precioCentimos)}
Unidades: ${p.unidades}
Descuento: ${lineaDescuento}
TOTAL: ${formatearEuros(totalCentimos(p))}`;

  return plantilla;
}
// console.log(ficha(teclado));
// console.log(ficha(raton));

// =====================================================================
// PRUEBAS
// =====================================================================

console.log(ficha(teclado));
console.log();
console.log(ficha(raton));

// Salida esperada de la segunda ficha:
//   === Ratón inalámbrico ===
//   Precio unidad: 19.90 €
//   Unidades: 2
//   Descuento: 10 %
//   TOTAL: 35.82 €


// --- 2.7 · Pregunta --------------------------------------------------
// Compara este fichero con tu ej4 de S1. Si ahora hubiera que añadir un
// tercer producto al recibo, ¿cuánto código habría que tocar en cada
// versión?
// → En S1 añadir un tercer producto significaba duplicar cuatro variables, duplicar el if del descuento, duplicar el console.log, y renombrarlo todo con sufijos (nombre3, precio3). Aquí es una línea.