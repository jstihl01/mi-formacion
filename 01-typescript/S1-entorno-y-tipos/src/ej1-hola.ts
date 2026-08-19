// =====================================================================
// EJERCICIO 1 · Tu primer TypeScript
// Ejecutar con:  node S1-entorno-y-tipos/src/ej1-hola.ts
// =====================================================================

// --- 1.1 -------------------------------------------------------------
// Esto ya funciona. Ejecuta el fichero antes de tocar nada y comprueba
// que ves el saludo en la terminal.
console.log("Hola, TypeScript");

// --- 1.2 -------------------------------------------------------------
// TODO: declara una constante `miNombre` con tu nombre, SIN anotar el
// tipo (deja que TypeScript lo infiera).
// Pista: const nombre = "…";


// --- 1.3 -------------------------------------------------------------
// TODO: declara una constante `anyoNacimiento` con tu año de nacimiento,
// esta vez SÍ anotando el tipo explícitamente.
// Pista: const algo: number = …;


// --- 1.4 -------------------------------------------------------------
// TODO: declara una variable `edad` que se pueda reasignar (¿const o let?)
// y calcúlala a partir de `anyoNacimiento` y del año actual, 2026.


// --- 1.5 -------------------------------------------------------------
// TODO: imprime esta línea usando una PLANTILLA (acento invertido) y las
// variables de arriba, sin repetir los valores a mano:
//
//    Me llamo <tu nombre> y tengo <tu edad> años
//
// Pista: console.log(`… ${variable} …`);


// --- 1.6 -------------------------------------------------------------
// TODO: declara una constante `esMayorDeEdad` de tipo boolean, calculada
// comparando `edad` con 18. No escribas true ni false a mano: usa una
// comparación (>=).


// --- 1.7 -------------------------------------------------------------
// TODO: imprime, en una sola llamada a console.log y usando una
// plantilla multilínea (la que abre con acento invertido y ocupa varias
// líneas), estas dos líneas:
//
//    Nacido en <año>
//    Mayor de edad: <true o false>


// --- 1.8 · Experimento -----------------------------------------------
// Quita el comentario de la línea siguiente y ejecuta `npm run check`.
// Lee el mensaje de error entero: es el aviso más común de TypeScript y
// conviene reconocerlo a la primera.
// Luego vuelve a comentarla y escribe abajo, con tus palabras, qué dice.
//
// miNombre = 42;
//
// Qué dice el error (escríbelo aquí):
// →
