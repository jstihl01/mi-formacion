// =====================================================================
// EJERCICIO 1 · Funciones
// Ejecutar con:  node S2-funciones-y-objetos/src/ej1-funciones.ts
//
// En S1 estos cálculos estaban sueltos por el fichero. Ahora tienen
// nombre y se pueden reutilizar.
// =====================================================================

// --- 1.1 -------------------------------------------------------------
// TODO: escribe `eurosACentimos`, que recibe un precio en euros (number)
// y devuelve los céntimos como ENTERO.
// Acuérdate de ej4 de S1: multiplicar por 100 no basta.
//   eurosACentimos(89.9)  ->  8990
//   eurosACentimos(8.29)  ->  829     <- este es el que delata si falta el redondeo


// --- 1.2 -------------------------------------------------------------
// TODO: escribe `formatearEuros`, que recibe céntimos (number) y
// devuelve un texto con 2 decimales y el símbolo del euro.
//   formatearEuros(8990)  ->  "89.90 €"
// Anota el tipo de retorno explícitamente en esta: quiero que TypeScript
// te avise si devuelves algo que no sea string.


// --- 1.3 -------------------------------------------------------------
// TODO: escribe la MISMA función que en 1.2 pero como función flecha,
// con el nombre `formatearEurosFlecha`. El cuerpo cabe en una sola
// expresión, así que no necesitas ni llaves ni `return`.


// --- 1.4 -------------------------------------------------------------
// TODO: escribe `aplicarIva`, que recibe una base en céntimos y un tipo
// de IVA con valor POR DEFECTO de 21. Devuelve céntimos enteros.
//   aplicarIva(10000)      ->  12100
//   aplicarIva(10000, 10)  ->  11000
// Ojo con los céntimos fraccionarios: redondea.


// --- 1.5 -------------------------------------------------------------
// TODO: escribe `describirProducto`, que recibe un nombre (string) y,
// OPCIONALMENTE, un fabricante (string). Devuelve:
//   describirProducto("Teclado")            ->  "Teclado"
//   describirProducto("Teclado", "Acme")    ->  "Teclado (Acme)"
// Necesitas comprobar el caso en que no venga. Fíjate en qué tipo tiene
// el parámetro dentro de la función: pon el cursor encima.


// --- 1.6 · Pregunta --------------------------------------------------
// En 1.4 usaste valor por defecto y en 1.5 parámetro opcional.
// ¿Por qué en 1.4 NO hace falta comprobar nada dentro de la función y
// en 1.5 SÍ?
// →


// =====================================================================
// PRUEBAS · descomenta según vayas escribiendo cada función
// =====================================================================

// console.log(eurosACentimos(89.9));                  // 8990
// console.log(eurosACentimos(8.29));                  // 829
// console.log(formatearEuros(8990));                  // 89.90 €
// console.log(formatearEurosFlecha(8990));            // 89.90 €
// console.log(aplicarIva(10000));                     // 12100
// console.log(aplicarIva(10000, 10));                 // 11000
// console.log(describirProducto("Teclado"));          // Teclado
// console.log(describirProducto("Teclado", "Acme"));  // Teclado (Acme)
