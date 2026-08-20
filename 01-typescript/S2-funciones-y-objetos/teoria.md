# S2 · Funciones, objetos y arrays

**Tiempo previsto:** ~20 min de lectura.
**Objetivo:** agrupar datos en objetos con `type`, y escribir funciones que los reciban y devuelvan.

---

## 0. De dónde venimos

En S1 el fichero del recibo tenía esto:

```ts
const nombre = "Teclado mecánico";
const precioUnidad = 89.9;
const unidades = 3;
const descuentoPorcentaje: number | null = null;
```

Cuatro variables sueltas que describen **una sola cosa**. Si mañana hay dos productos, tienes ocho
variables y ninguna forma de saber cuáles van juntas. Tu respuesta en 4.6 fue "el equivalente en TS
a una clase o un struct", y la respuesta real es que **no necesitas ninguna de las dos**. Eso es lo
que vemos hoy.

---

## 1. Funciones

### La forma básica

```ts
function areaRectangulo(ancho: number, alto: number): number {
  return ancho * alto;
}

console.log(areaRectangulo(3, 4));   // 12
```

Casi igual que en C#, con dos diferencias:

- La palabra `function` sustituye al tipo de retorno del principio.
- El tipo de retorno va **al final, tras los dos puntos**.

### Los parámetros SIEMPRE se anotan

Esta es la regla más importante de la sesión, y es la excepción a lo que aprendiste en S1 sobre
dejar que TypeScript infiera:

```ts
function doblar(n) { … }              // ✗ Parameter 'n' implicitly has an 'any' type
function doblar(n: number) { … }      // ✔
```

TypeScript infiere el tipo de una variable mirando su valor. Pero un parámetro **no tiene valor
hasta que alguien llama a la función**, así que no hay nada de donde inferir. Si no lo anotas, con
`strict` activado es un error.

> **Regla práctica: anota siempre los parámetros, casi nunca el retorno.**
> El retorno TypeScript lo deduce solo de lo que devuelves.

Anotar el retorno es opcional pero útil en un caso: cuando quieres que TypeScript te avise si te
equivocas *dentro* de la función. Con `: number` puesto, un `return "hola"` por accidente falla en
la propia función; sin anotarlo, el error aparece más lejos, donde se use el resultado, y es más
difícil de rastrear.

### Funciones que no devuelven nada: `void`

```ts
function imprimirFicha(nombre: string): void {
  console.log(`Producto: ${nombre}`);
}
```

`void` es lo mismo que en C#. También se puede omitir y dejar que se infiera.

### Parámetros opcionales y por defecto

```ts
// Opcional: se marca con ? y puede no venir
function saluda(nombre: string, titulo?: string): string {
  if (titulo === undefined) {
    return `Hola ${nombre}`;
  }
  return `Hola ${titulo} ${nombre}`;
}

saluda("Ana");            // "Hola Ana"
saluda("Ana", "Dra.");    // "Hola Dra. Ana"
```

Dentro de la función, `titulo` es de tipo `string | undefined` — el `?` **añade `undefined` al
tipo**. Por eso hay que comprobarlo antes de usarlo, igual que hacías con `null` en S1. Es el mismo
patrón de siempre: el tipo unión te obliga a descartar el caso vacío.

```ts
// Por defecto: se le da un valor si no viene
function aplicarIva(base: number, tipo: number = 21): number {
  return base * (1 + tipo / 100);
}

aplicarIva(100);       // 121
aplicarIva(100, 10);   // 110
```

Con valor por defecto **no hace falta comprobar nada**: dentro, `tipo` es siempre `number`. Y no
hace falta anotarlo, porque el valor por defecto ya dice el tipo. Cuando puedas elegir, prefiere el
valor por defecto al parámetro opcional: te ahorra la comprobación.

⚠️ Los parámetros opcionales y con valor por defecto van **siempre al final**. No existe el paso de
argumentos por nombre de C# (`aplicarIva(base: 100)`).

### Funciones flecha

La misma función, escrita de otra forma:

```ts
function doblar(n: number): number {
  return n * 2;
}

const doblar = (n: number): number => n * 2;      // función flecha
```

Léelo así: los paréntesis son los parámetros, la flecha `=>` sustituye a `{ return … }` cuando el
cuerpo es una sola expresión. Si necesitas varias líneas, vuelven las llaves y el `return`:

```ts
const doblar = (n: number): number => {
  const resultado = n * 2;
  return resultado;
};
```

**Por qué existen las dos formas.** En JavaScript una función es **un valor**, como un número o un
texto: se puede guardar en una variable, pasar como argumento y devolver desde otra función. La
flecha es una forma compacta de escribir una función ahí donde hace falta un valor:

```ts
const numeros = [3, 1, 2];
numeros.sort((a, b) => a - b);       // la función se pasa como argumento
```

Ese patrón — pasar una función a otra función — es el corazón de la sesión 3 y de casi todo React.
Por ahora quédate con reconocer la sintaxis.

**Cuál usar:** para funciones con nombre, `function` y flecha son equivalentes; el proyecto real usa
las dos. Para funciones pasadas como argumento, siempre flecha. (Hay una diferencia real entre
ambas relacionada con `this`, pero no la vas a encontrar en el código que vas a escribir.)

---

## 2. Objetos

### El literal

Un objeto se escribe directamente, sin clase, sin constructor y sin `new`:

```ts
const teclado = {
  nombre: "Teclado mecánico",
  precioCentimos: 8990,
  unidades: 3,
};

console.log(teclado.nombre);          // acceso con punto, como en C#
console.log(teclado.precioCentimos);
```

Esto es lo más ajeno viniendo de C#: **el objeto existe por sí solo**, no es "instancia de" nada.
Lo más parecido que conoces es un tipo anónimo de C# (`new { Nombre = "x" }`), pero aquí no es un
caso raro: es *la* forma normal de mover datos.

TypeScript ya le ha inferido un tipo: `{ nombre: string; precioCentimos: number; unidades: number }`.
Ponle el cursor encima en VS Code y lo verás.

### Nombrar la forma con `type`

Repetir esa descripción en cada función sería insufrible, así que se le pone nombre:

```ts
type Producto = {
  nombre: string;
  precioCentimos: number;
  unidades: number;
  descuentoPorcentaje: number | null;
};

const teclado: Producto = {
  nombre: "Teclado mecánico",
  precioCentimos: 8990,
  unidades: 3,
  descuentoPorcentaje: null,
};
```

Detalles:

- `type` **no genera código**: desaparece al ejecutar, como todo lo demás de TypeScript. No es una
  clase; es una etiqueta que describe una forma.
- Dentro se separa con `;` (también vale `,`).
- Los tipos se nombran en `PascalCase`: `Producto`, no `producto`.
- No hay constructor, ni métodos, ni herencia. Solo la lista de campos y sus tipos.

### Propiedades opcionales

```ts
type Producto = {
  nombre: string;
  descripcion?: string;        // puede no estar
};

const p: Producto = { nombre: "Ratón" };    // ✔ válido
```

Igual que en los parámetros, `?` significa que el tipo real es `string | undefined` y hay que
comprobarlo antes de usarlo.

⚠️ No confundas los dos "vacíos":

```ts
descripcion?: string          // la propiedad puede NO EXISTIR
descripcion: string | null    // la propiedad existe SIEMPRE, y puede valer null
```

En una base de datos son cosas distintas y Prisma te obligará a distinguirlas.

### Objetos anidados

```ts
type Producto = {
  nombre: string;
  proveedor: {
    nombre: string;
    pais: string;
  };
};

console.log(producto.proveedor.pais);
```

### Y `interface`

Verás también esta otra sintaxis, que hace casi lo mismo:

```ts
interface Producto {
  nombre: string;
}
```

La regla que sigue casi todo el mundo hoy: **usa `type` por defecto**. `interface` tiene alguna
capacidad extra que no necesitas todavía. Solo la menciono para que la reconozcas.

---

## 3. Tipado estructural: el cambio mental grande

En C#, un objeto es un `Producto` porque **está declarado** como tal. Aunque otra clase tenga
exactamente los mismos campos, no son intercambiables. Eso se llama tipado **nominal**: manda el
nombre.

TypeScript funciona al revés. Es tipado **estructural**: manda la forma.

```ts
type Producto = { nombre: string; precioCentimos: number };

// Este objeto NO dice en ninguna parte que sea un Producto...
const algo = { nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" };

const p: Producto = algo;      // ✔ ...y sin embargo vale
```

Vale porque `algo` **tiene todo lo que `Producto` exige**. Que además traiga `colorCaja` no molesta
a nadie: sobra, no falta.

Esto es lo que hace que TypeScript sea cómodo para datos que vienen de fuera (una consulta a la base
de datos, una respuesta HTTP). No tienes que convertir nada a una clase: si la forma encaja, encaja.

### La excepción que confunde a todo el mundo

```ts
const p2: Producto = { nombre: "Ratón", precioCentimos: 1990, colorCaja: "azul" };
// ✗ error TS2353: Object literal may only specify known properties,
//   and 'colorCaja' does not exist in type 'Producto'.
```

**El mismo objeto que antes valía, ahora falla.** La única diferencia es que se escribe
directamente en el sitio en lugar de venir de una variable.

La razón: cuando escribes un literal *ahí mismo*, TypeScript asume que si has puesto `colorCaja` es
porque creías que servía para algo — y casi siempre es una errata (`nombreProducto` en lugar de
`nombre`, por ejemplo). Como no puede haber otro sitio que use esa propiedad, te avisa.

Cuando el objeto viene de una variable, en cambio, TypeScript supone que la propiedad de más tiene
su motivo en otra parte, y se calla.

No hace falta que memorices la regla. Lo que sí hace falta es **reconocer el error TS2353 cuando
salga** y saber que casi siempre significa "te has equivocado escribiendo el nombre de un campo".

---

## 4. Arrays

```ts
const nombres: string[] = ["Ana", "Luis"];
const precios: number[] = [1990, 8990];
const productos: Producto[] = [teclado, raton];    // array de objetos

const vacio: string[] = [];        // aquí SÍ hay que anotar: de [] no se infiere nada
```

`Tipo[]` se lee "array de Tipo". Lo básico:

```ts
productos.length          // cuántos hay
productos[0]              // el primero (empiezan en 0, como siempre)
productos.push(nuevo)     // añadir al final
```

Recuerda de S1: `const` no impide `push`. Solo impide reasignar el nombre del array.

### La trampa que te va a morder

```ts
const numeros: number[] = [1, 2, 3];
console.log(numeros[99]);        // undefined
```

En C# eso lanza `IndexOutOfRangeException`. Aquí **no pasa nada**: devuelve `undefined` y el
programa sigue. Y lo peor:

```ts
const n = numeros[99];           // TypeScript dice que n es number
console.log(n * 2);              // ✔ compila... e imprime NaN
```

TypeScript **te miente aquí**, y lo hace a propósito: si cada acceso a un array fuera
`number | undefined`, habría que comprobar el `undefined` en cada línea y el código sería
inaguantable. Se eligió la comodidad sobre el rigor.

La consecuencia práctica: **si vas a acceder a un array por índice y no estás seguro de que exista,
compruébalo tú**. Es la fuente número uno de `undefined` inesperados y de `NaN` en producción. Con
los métodos de la sesión 3 (`map`, `filter`, `find`) el problema casi desaparece, porque dejas de
usar índices.

---

## 5. Todo junto

```ts
type Producto = {
  nombre: string;
  precioCentimos: number;
  unidades: number;
};

function totalCentimos(p: Producto): number {
  return p.precioCentimos * p.unidades;
}

function formatearEuros(centimos: number): string {
  return `${(centimos / 100).toFixed(2)} €`;
}

const teclado: Producto = { nombre: "Teclado mecánico", precioCentimos: 8990, unidades: 3 };

console.log(`${teclado.nombre}: ${formatearEuros(totalCentimos(teclado))}`);
// Teclado mecánico: 269.70 €
```

Compara esto con tu ej4 de S1: los mismos datos y el mismo cálculo, pero ahora **el producto es una
cosa** y **el cálculo tiene nombre**. Añadir un segundo producto es una línea, no cuatro variables.

---

## 6. Lo que hay que llevarse

1. Los parámetros de una función **siempre** se anotan; el retorno casi nunca hace falta.
2. `?` en un parámetro o propiedad significa "puede ser `undefined`", y hay que comprobarlo.
   Un valor por defecto (`= 21`) evita la comprobación.
3. Las funciones son valores: por eso existe la sintaxis flecha `(x) => …`.
4. Los objetos se escriben directamente, sin clase ni `new`. `type` solo les pone nombre a la forma.
5. TypeScript es **estructural**: si la forma encaja, vale — con la excepción de los literales
   escritos en el sitio, que no admiten campos de más (TS2353).
6. `Tipo[]` es un array. Un índice fuera de rango devuelve `undefined` sin avisar y **TypeScript no
   te protege** de eso.

Ahora ve a [ejercicios.md](ejercicios.md).
