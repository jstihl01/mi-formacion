// =====================================================================
// EJERCICIO 3 · Un solo tipo numérico
//
// Ejercicio de predicción. Para cada punto:
//   1. Escribe tu predicción en el comentario "Predigo:".
//   2. SOLO DESPUÉS ejecuta:
//        node S1-entorno-y-tipos/src/ej3-numeros.ts
//   3. Si has fallado, escribe el valor real en "Real:".
//
// Fallar es el objetivo. Un fallo aquí es un error que no cometerás en
// producción dentro de tres meses.
// =====================================================================

// --- P1 --------------------------------------------------------------
// Predigo: "P1: 3.333333333..."
// Real (si he fallado): "P1: 3.3333333333333335"
console.log("P1:", 10 / 3);

// --- P2 --------------------------------------------------------------
// Math.trunc() corta la parte decimal.
// Predigo: "P2: 3"
// Real (si he fallado):
console.log("P2:", Math.trunc(10 / 3));

// --- P3 --------------------------------------------------------------
// Predigo: "P3: true"
// Real (si he fallado): "P3: false"
console.log("P3:", 0.1 + 0.2 === 0.3);

// --- P4 --------------------------------------------------------------
// Number.isInteger() dice si un número es entero.
// Predigo: "P4: true"
// Real (si he fallado):
console.log("P4:", Number.isInteger(4.0));

// --- P5 --------------------------------------------------------------
// Dividir por cero. En C# esto lanzaría una excepción.
// Predigo: Error
// Real (si he fallado): "P5: Infinity"
console.log("P5:", 1 / 0);

// --- P6 --------------------------------------------------------------
// Number() intenta convertir texto a número.
// Predigo: Error
// Real (si he fallado): "P6: NaN"
console.log("P6:", Number("hola"));


// =====================================================================
// Ahora escribe tú. Nada de predicciones: código.
// =====================================================================

// --- 3.1 -------------------------------------------------------------
// TODO: declara tres constantes con las notas 7.5, 8.25 y 6 y calcula
// la media en una constante `media`. Imprímela.
const nota1 = 7.5;
const nota2 = 8.25;
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;
console.log(`Nota media: ${media}`);

// --- 3.2 -------------------------------------------------------------
// TODO: imprime la media redondeada a 2 decimales.
// Pista: los números tienen un método .toFixed(2)
//        -> (1.23456).toFixed(2)
// Fíjate bien en cómo sale impreso el resultado y responde:
// ¿toFixed devuelve un número o un texto? ¿Cómo lo sabes?
// → Devuelve un texto, porque he puesto el cursor encima y dice "const mediaRedondeada: string"
const mediaRedondeada = media.toFixed(2);
console.log(`Nota media (redondeada): ${mediaRedondeada}`);

// --- 3.3 -------------------------------------------------------------
// TODO: calcula cuántos paquetes completos de 12 unidades salen de 100
// unidades, y cuántas unidades sobran. Imprime las dos cosas.
// En C# usarías división entera y módulo; aquí el módulo (%) existe
// igual, pero la división entera hay que construirla.
const cociente = Math.trunc(100 / 12);
const resto = 100 % 12;
console.log(`Paquetes completos: ${cociente}
Unidades que sobran: ${resto}`);

// --- 3.4 · Reflexión -------------------------------------------------
// Después de P3, ¿te fiarías de comparar dos precios con === en una
// aplicación real? ¿Qué harías en su lugar?
// → No, usaría Math.abs o calcularía con enteros (céntimos)
console.log("P3:", Math.abs(0.1 + 0.2) === 0.3);
console.log("P3:", 10 + 20 === 30);