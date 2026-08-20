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
// Predigo:
// Resultado:
//
// const c1: Producto = conExtra;


// --- CASO 2 ----------------------------------------------------------
// Lo mismo, pero escribiendo el objeto DIRECTAMENTE en el sitio.
// Predigo:
// Resultado:
//
// const c2: Producto = { nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" };


// --- CASO 3 ----------------------------------------------------------
// Un objeto al que le FALTA un campo.
// Predigo:
// Resultado:
//
// const c3: Producto = { nombre: "Ratón" };


// --- CASO 4 ----------------------------------------------------------
// Pasar un `Articulo` a una función que pide un `Producto`.
// Son dos tipos con nombres distintos. En C# esto sería impensable.
// Predigo:
// Resultado:
//
// const articulo: Articulo = { nombre: "Ratón", precioCentimos: 1990 };
// console.log(etiqueta(articulo));


// --- CASO 5 ----------------------------------------------------------
// Pasar a esa misma función un objeto escrito directamente, con un
// campo de más.
// Predigo:
// Resultado:
//
// console.log(etiqueta({ nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" }));


// =====================================================================
// --- 3.1 · Conclusión ------------------------------------------------
// Los casos 1 y 2 son el MISMO objeto con el MISMO tipo de destino, y
// se comportan distinto. Con tus palabras: ¿cuál es la diferencia y por
// qué crees que TypeScript la trata así?
// →
//
//
// --- 3.2 · Conclusión ------------------------------------------------
// Tras el caso 4: ¿qué hace que un objeto "sea" un Producto en
// TypeScript? Compáralo con cómo funcionaría en C#.
// →
//
//
// --- 3.3 · Aplicación ------------------------------------------------
// En el proyecto real, los datos llegan de la base de datos y de
// respuestas HTTP. ¿Qué ventaja tiene el tipado estructural en ese
// escenario frente al de C#?
// →
// =====================================================================
