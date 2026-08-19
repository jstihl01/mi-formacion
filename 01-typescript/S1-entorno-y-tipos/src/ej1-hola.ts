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
const miNombre = "Jaime";
console.log(miNombre);

// --- 1.3 -------------------------------------------------------------
// TODO: declara una constante `anyoNacimiento` con tu año de nacimiento,
// esta vez SÍ anotando el tipo explícitamente.
// Pista: const algo: number = …;
const anyoNacimiento: number = 2001;
console.log(anyoNacimiento);

// --- 1.4 -------------------------------------------------------------
// TODO: declara una variable `edad` que se pueda reasignar (¿const o let?)
// y calcúlala a partir de `anyoNacimiento` y del año actual, 2026.
let edad = 2026 - anyoNacimiento;
console.log(edad);

// --- 1.5 -------------------------------------------------------------
// TODO: imprime esta línea usando una PLANTILLA (acento invertido) y las
// variables de arriba, sin repetir los valores a mano:
//
//    Me llamo <tu nombre> y tengo <tu edad> años
//
// Pista: console.log(`… ${variable} …`);
const plantilla = `Me llamo ${miNombre} y tengo ${edad} años`;
console.log(plantilla);

// --- 1.6 -------------------------------------------------------------
// TODO: declara una constante `esMayorDeEdad` de tipo boolean, calculada
// comparando `edad` con 18. No escribas true ni false a mano: usa una
// comparación (>=).
const esMayorDeEdad = edad >= 18;
console.log(esMayorDeEdad);

// --- 1.7 -------------------------------------------------------------
// TODO: imprime, en una sola llamada a console.log y usando una
// plantilla multilínea (la que abre con acento invertido y ocupa varias
// líneas), estas dos líneas:
//
//    Nacido en <año>
//    Mayor de edad: <true o false>
const plantillaMulti = `Nacido en ${anyoNacimiento}
Mayor de edad: ${esMayorDeEdad}`

console.log(plantillaMulti);

// --- 1.8 · Experimento -----------------------------------------------
// Quita el comentario de la línea siguiente y ejecuta `npm run check`.
// Lee el mensaje de error entero: es el aviso más común de TypeScript y
// conviene reconocerlo a la primera.
// Luego vuelve a comentarla y escribe abajo, con tus palabras, qué dice.
//
// miNombre = 42;

//
// Qué dice el error (escríbelo aquí):
// → Dice que no se le puede asignar ese valor a miNombre porque es una constante.