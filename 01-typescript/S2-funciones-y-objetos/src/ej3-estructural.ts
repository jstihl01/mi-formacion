// =====================================================================
// EJERCICIO 3 · Tipado estructural
//
// Ejercicio de predicción, pero sobre si algo COMPILA, no sobre lo que
// imprime. Para cada caso:
//
//   1. Escribe tu predicción: ¿compila o no? ¿por qué?
//   2. Descomenta SOLO ese caso.
//   3. npm run check
//   4. Anota el resultado (y el código del error, TSxxxx, si falla).
//   5. Vuelve a comentarlo antes de pasar al siguiente.
//
// Un caso cada vez. Si los descomentas todos, no sabrás qué error
// viene de dónde.
// =====================================================================

type Producto = {
  nombre: string;
  precioCentimos: number;
};

// Un tipo distinto, con EXACTAMENTE los mismos campos.
type Articulo = {
  nombre: string;
  precioCentimos: number;
};

function etiqueta(p: Producto): string {
  return `${p.nombre}: ${p.precioCentimos} céntimos`;
}

// Un objeto normal, con un campo de más. Fíjate: no dice en ninguna
// parte que sea un Producto.
const conExtra = {
  nombre: "Ratón",
  precioCentimos: 1990,
  colorCaja: "azul",
};

// --- CASO 1 ----------------------------------------------------------
// Asignar a Producto una VARIABLE que tiene un campo de más.
// Predigo: Compila, TS permite crear objetos con campos de más si vienen de una variable.
// Resultado: Compila.
//
// const c1: Producto = conExtra;


// --- CASO 2 ----------------------------------------------------------
// Lo mismo, pero escribiendo el objeto DIRECTAMENTE en el sitio.
// Predigo: No compila, al explicitarlo TS entiende que sirve para algo y falla.
// Resultado: error TS2353: Object literal may only specify known properties, and 'colorCaja' does not exist in type 'Producto'.
//
// const c2: Producto = { nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" };


// --- CASO 3 ----------------------------------------------------------
// Un objeto al que le FALTA un campo.
// Predigo: No compila, no pueden faltar campos.
// Resultado: Property 'precioCentimos' is missing in type '{ nombre: string; }' but required in type 'Producto'.
//
// const c3: Producto = { nombre: "Ratón" };


// --- CASO 4 ----------------------------------------------------------
// Pasar un `Articulo` a una función que pide un `Producto`.
// Son dos tipos con nombres distintos. En C# esto sería impensable.
// Predigo: Compila, TypeScript es tipado estructural.
// Resultado: Compila.
//
// const articulo: Articulo = { nombre: "Ratón", precioCentimos: 1990 };
// console.log(etiqueta(articulo));


// --- CASO 5 ----------------------------------------------------------
// Pasar a esa misma función un objeto escrito directamente, con un
// campo de más.
// Predigo: No compila, en una función no pueden sobrar campos.
// Resultado: error TS2353: Object literal may only specify known properties, and 'colorCaja' does not exist in type 'Producto'..
//
// console.log(etiqueta({ nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" }));


// =====================================================================
// --- 3.1 · Conclusión ------------------------------------------------
// Los casos 1 y 2 son el MISMO objeto con el MISMO tipo de destino, y
// se comportan distinto. Con tus palabras: ¿cuál es la diferencia y por
// qué crees que TypeScript la trata así?
// → Lo mismo que he dicho antes. TypeScript es flexible y permite crear un objeto con campos sobrantes si viene de una variable. Pero si lo escribes directamente en el sitio, entiende que la has puesto ahí por algo y no la ignora.
//
//
// --- 3.2 · Conclusión ------------------------------------------------
// Tras el caso 4: ¿qué hace que un objeto "sea" un Producto en
// TypeScript? Compáralo con cómo funcionaría en C#.
// → Lo mismo que he dicho antes. En TypeScript el tipado es estructural. Lo que hace que sea un Producto es su estructura, no su nombre. En C# es su nombre, por eso es nominal.
//
//
// --- 3.3 · Aplicación ------------------------------------------------
// En el proyecto real, los datos llegan de la base de datos y de
// respuestas HTTP. ¿Qué ventaja tiene el tipado estructural en ese
// escenario frente al de C#?
// → Puede adaptarse a datos que lleguen con información de más y sólo capturar la que le interese.
// =====================================================================
