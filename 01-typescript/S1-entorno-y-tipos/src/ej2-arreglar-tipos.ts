// =====================================================================
// EJERCICIO 2 · Arreglar los tipos
//
// Este fichero tiene 5 errores de tipos PUESTOS A PROPÓSITO.
//
// Paso 1:  node S1-entorno-y-tipos/src/ej2-arreglar-tipos.ts
//          Compruébalo: funciona, a pesar de los 5 errores.
//          Apunta abajo qué imprime.
//
// Paso 2:  npm run check
//          Arregla los 5 hasta que no diga nada. Sin borrar líneas:
//          hay que corregir, no eliminar.
// =====================================================================

// --- ERROR 1 ---------------------------------------------------------
// El tipo declarado y el valor no cuadran.
// Hay DOS formas de arreglarlo. Elige la que te parezca más razonable
// para un dato que representa el nombre de un cliente, y explica por qué
// en el comentario de abajo.
const idCliente = 42;
console.log(`ID Cliente: ${idCliente}`);

// Por qué he elegido esa forma:
// → Porque seguramente el número se refería al ID y porque no es necesario especificar que es un number dado el nombre de la variable y su contenido.

// --- ERROR 2 ---------------------------------------------------------
// Aquí no hay ninguna anotación de tipo, y aun así TypeScript se queja.
// Lee el error con atención: te está diciendo algo sobre `unidades`.
// (Al ejecutar verás que JavaScript "se las apaña" y da un número. Ese
//  apaño automático es precisamente lo que TypeScript quiere impedir.)
const unidades = 3;
const unidadesDobles = unidades * 2;
console.log(`Unidades dobladas: ${unidadesDobles}`);

// --- ERROR 3 ---------------------------------------------------------
// `descuento` puede ser null, y TypeScript no te deja restar sin más.
// Arréglalo con un `if` que compruebe el null, como en la teoría (§4).
// Necesitarás cambiar `const precioFinal` por `let precioFinal` y
// anotarle el tipo. Piensa qué valor debe tener si NO hay descuento.
const descuento: number | null = null;
let precioFinal: number = 0;
if (descuento != null) // NO es null
{
  precioFinal = 100 - descuento;
}
else // SÍ es null
{
  precioFinal = 100;
}
console.log(`Precio final: ${precioFinal}`);

// --- ERROR 4 ---------------------------------------------------------
// Un boolean no admite texto, ni siquiera "sí".
// Al ejecutar verás que el `if` entra igualmente: para JavaScript,
// cualquier texto no vacío "cuenta como verdadero". Eso se llama valor
// truthy y da muchos disgustos.
const enStock = true;
if (enStock) {
  console.log("Hay stock");
}

// --- ERROR 5 ---------------------------------------------------------
// Se declara el tipo pero no se le da valor nunca.
// Fíjate en qué imprime al ejecutar: eso es `undefined` en acción.
const categoria = "Wuxia";
console.log(`Categoría: ${categoria}`);

// =====================================================================
// Qué imprimía el fichero ANTES de arreglar nada (pégalo aquí):
/*
Cliente: 42
Unidades dobladas: 6
Precio final: 100
Hay stock
Categoría: undefined
*/
// Cuál de los 5 errores te ha parecido más raro, y por qué:
// → El error 2 me ha sorprendido, no pensaba que JavaScript fuera a permitir algo así y, en apariencia, no parece tan grave como luego seguramente sea. Y el error 3 me ha llevado un rato porque me había dejado fuera el console.log y no encontraba el valor del precio final.
// =====================================================================
