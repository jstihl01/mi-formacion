// =====================================================================
// EJERCICIO 4 · Un array de productos   (ejercicio de integración)
// Ejecutar con:  node S2-funciones-y-objetos/src/ej4-catalogo.ts
//
// Aquí SÍ quiero que uses `for` clásico. Es la última vez: en S3
// rehacemos este mismo fichero con map/filter/reduce y comparamos.
// Guarda tu versión tal cual la dejes.
// =====================================================================

type Producto = {
  nombre: string;
  precioCentimos: number;
  unidades: number;
};

const catalogo: Producto[] = [
  { nombre: "Teclado mecánico", precioCentimos: 8990, unidades: 3 },
  { nombre: "Ratón inalámbrico", precioCentimos: 1990, unidades: 2 },
  { nombre: "Monitor 27\"", precioCentimos: 24950, unidades: 1 },
  { nombre: "Alfombrilla", precioCentimos: 990, unidades: 5 },
];

function formatearEuros(centimos: number): string {
  return `${(centimos / 100).toFixed(2)} €`;
}

// --- 4.1 -------------------------------------------------------------
// TODO: escribe `valorLinea(p: Producto): number`
// Devuelve precio × unidades en céntimos.


// --- 4.2 -------------------------------------------------------------
// TODO: escribe `valorTotal(productos: Producto[]): number`
// Recorre el array con un `for` y suma el valor de cada línea.
// Reutiliza `valorLinea`.
//
// Sintaxis del for clásico, idéntica a C#:
//   for (let i = 0; i < productos.length; i++) { … }
//
// Existe también `for (const p of productos)`, que recorre los
// elementos directamente sin índice. Usa el que prefieras, pero prueba
// los dos y quédate con el que te parezca más legible.


// --- 4.3 -------------------------------------------------------------
// TODO: escribe `masCaro(productos: Producto[]): Producto`
// Devuelve el producto con mayor precio POR UNIDAD.
//
// Piensa antes de escribir: para arrancar la comparación necesitas un
// "campeón" inicial. ¿Cuál eliges y qué pasa si el array viniera vacío?
// (No hace falta que resuelvas el array vacío; sí que me digas abajo
//  qué pasaría.)


// --- 4.4 -------------------------------------------------------------
// TODO: escribe `resumen(productos: Producto[]): string` que devuelva:
//
//   --- CATÁLOGO (4 productos) ---
//   Teclado mecánico x3 = 269.70 €
//   Ratón inalámbrico x2 = 39.80 €
//   Monitor 27" x1 = 249.50 €
//   Alfombrilla x5 = 49.50 €
//   ------------------------------
//   Valor total: 608.50 €
//   Más caro por unidad: Monitor 27"
//
// La lista de líneas se construye acumulando texto en un `let`.
// Que la función devuelva el texto en vez de imprimirlo, como en ej2.


// =====================================================================
// PRUEBAS
// =====================================================================

// console.log(resumen(catalogo));


// --- 4.5 · Preguntas -------------------------------------------------
// a) ¿Qué devolvería `masCaro([])` con tu implementación? ¿Y qué dice
//    TypeScript sobre el tipo de retorno en ese caso?
//    →
//
// b) Has escrito tres funciones que recorren el mismo array de tres
//    formas casi idénticas. ¿Qué te ha resultado repetitivo?
//    (Esa molestia es exactamente lo que resuelve la sesión 3.)
//    →
