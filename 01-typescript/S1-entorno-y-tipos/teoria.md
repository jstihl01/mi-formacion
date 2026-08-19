# S1 · Entorno y tipos

**Tiempo previsto:** ~20 min de lectura.
**Objetivo:** entender qué son Node, npm y TypeScript, y ejecutar tu primer fichero `.ts`.

---

## 0. Por qué empezamos por aquí

Las seis herramientas que tienes que aprender (React, Next.js, TypeScript, MySQL, Prisma, Docker)
no son seis cosas independientes. Cinco de ellas se escriben o se configuran **en el mismo
lenguaje**: TypeScript.

```
       TypeScript          <- el lenguaje. Todo lo demás se escribe con esto.
           |
     React (pantallas)
           |
   Next.js (React + servidor + rutas)
           |
    Prisma (habla con la BD desde TypeScript)
           |
      MySQL (la BD)   <- Docker solo sirve para tenerla corriendo
```

Aprender React sin saber TypeScript es como aprender WPF sin saber C#: te pasarías el tiempo
peleando con la sintaxis en lugar de con las ideas. De ahí estas 4 sesiones iniciales, sin
navegador y sin frameworks: solo terminal.

---

## 1. Node: JavaScript fuera del navegador

JavaScript nació en 1995 para hacer cosas dentro de una página web. Durante años solo existía ahí:
si no había navegador, no había JavaScript.

**Node.js** cambió eso: es un programa que ejecuta JavaScript en tu ordenador, como cualquier otro
lenguaje. Sin navegador, sin páginas, sin HTML.

| Si vienes de… | El equivalente es… |
|---|---|
| C# → CLR / `dotnet run` | JavaScript → Node / `node fichero.js` |
| C++ → compilas un `.exe` | Node interpreta el fichero directamente, no hay `.exe` |
| Python → `python script.py` | Node → `node script.js` (esta es la comparación más exacta) |

Tienes instalada la versión 24 (`node --version`). Retenlo, porque importa para lo que viene.

---

## 2. npm: el gestor de paquetes

`npm` viene incluido con Node y hace lo mismo que NuGet en C# o pip en Python: descargar librerías
de terceros.

Tres piezas que verás en **todos** los proyectos del stack, incluido el real:

- **`package.json`** — la ficha del proyecto: su nombre, sus dependencias y sus atajos de comandos.
  Es el equivalente a un `.csproj`. Se escribe a mano o con `npm init`, y **sí se sube a git**.
- **`node_modules/`** — la carpeta donde npm descarga las librerías. Puede tener decenas de miles
  de ficheros. **Nunca se sube a git**: se regenera con `npm install`. Por eso está en el
  `.gitignore` de este repo.
- **`package-lock.json`** — la lista exacta de versiones que se instalaron realmente.
  `package.json` dice "quiero TypeScript 5.x"; el lock dice "se instaló la 5.9.3". Así tu máquina y
  la de un compañero acaban con lo mismo. **Sí se sube a git.**

Mira el `package.json` de este bloque ([../package.json](../package.json)):

```json
{
  "scripts": {
    "check": "tsc --noEmit"
  },
  "devDependencies": {
    "@types/node": "^24",
    "typescript": "^5"
  }
}
```

- `scripts` son atajos: `npm run check` ejecuta lo que ponga ahí. Es la forma estándar de no tener
  que recordar comandos largos.
- `devDependencies` son librerías que solo hacen falta **para desarrollar**, no para ejecutar.
  TypeScript es el ejemplo perfecto: revisa tu código y luego desaparece.
- `^5` significa "la 5 más nueva que haya, pero no la 6". El `^` es lo normal; el detalle de por
  qué se verá cuando toque.

---

## 3. TypeScript: JavaScript con tipos que luego se borran

JavaScript **no tiene tipos declarados**. Esto es JavaScript válido:

```js
let x = 5;
x = "hola";      // perfectamente legal
x = true;        // también
```

Eso escala fatal. En 2012 Microsoft (el mismo equipo de Anders Hejlsberg, el creador de C#) sacó
**TypeScript**: JavaScript exactamente igual, más una capa de tipos:

```ts
let x: number = 5;
x = "hola";      // ✗ Type 'string' is not assignable to type 'number'
```

### La idea más importante de esta sesión

> **Los tipos de TypeScript no existen cuando el programa se ejecuta.**

TypeScript no es un compilador que genere código máquina optimizado según los tipos, como C++ o C#.
Es más parecido a un **corrector ortográfico muy potente**: lee tu código, te avisa de las
incoherencias, y al ejecutar los tipos simplemente **se borran**. Lo que corre es JavaScript.

Consecuencias prácticas, y son las tres que más desconciertan al venir de C#:

1. **Un fichero con errores de tipos se ejecuta igualmente.** El error es un aviso, no un muro.
2. En tiempo de ejecución no puedes preguntar "¿de qué tipo declarado es esto?". El tipo ya no está.
3. Si un dato entra de fuera (una respuesta HTTP, un formulario), TypeScript **no lo valida**: se
   cree lo que le digas. Ahí es donde la gente se lleva el sorpresón. Lo trataremos más adelante.

### Cómo lo ejecutamos aquí

Históricamente había que compilar el `.ts` a `.js` y luego ejecutar el `.js`. **Node 24 ya ejecuta
`.ts` directamente**: borra los tipos al leer el fichero y ejecuta el resto. Así que en este curso
hay dos comandos independientes:

```bash
node src/ej1.ts     # EJECUTA el fichero (ignora los tipos por completo)
npm run check       # COMPRUEBA los tipos de todo el bloque (no ejecuta nada)
```

Que sean independientes es exactamente la idea del punto 1: `node` puede darte la salida correcta
mientras `npm run check` se queja. Las dos cosas importan.

*Efecto secundario de esto: no podemos usar la palabra `enum` de TypeScript, porque no se puede
borrar sin entenderla. No es pérdida — el código moderno, y el proyecto real, usa otra cosa en su
lugar que verás en S3.*

---

## 4. La sintaxis mínima

### Declarar variables: `const` y `let`

```ts
const nombre = "Ana";     // no se puede reasignar
let contador = 0;         // se puede reasignar
contador = 1;             // ✔
```

**Regla del oficio: usa `const` siempre, y `let` solo cuando vayas a reasignar.** No es pedantería;
al leer código, un `let` es una señal de "esto cambia, presta atención". En el proyecto real la
proporción es de más de 20 a 1.

Existe una tercera forma, `var`, de la primera época del lenguaje. **No la uses.** Solo la
menciono para que la reconozcas en código antiguo.

⚠️ `const` **no** es el `const` de C++. No congela el contenido, solo prohíbe reasignar el nombre:

```ts
const lista = [1, 2, 3];
lista.push(4);            // ✔ permitido: el array cambia
lista = [9];              // ✗ prohibido: reasignar el nombre
```

### Anotar el tipo: después del nombre, con dos puntos

```ts
// C#:          string nombre = "Ana";
const nombre: string = "Ana";
```

Pero casi nunca hace falta escribirlo. TypeScript **infiere** el tipo del valor:

```ts
const nombre = "Ana";     // TypeScript ya sabe que es string
nombre = 5;               // ✗ y lo hace cumplir igual
```

**Cuándo anotar y cuándo no**, que es lo que hace que el código parezca escrito por alguien con
experiencia:

- ❌ No anotes lo obvio: `const edad: number = 30` es ruido.
- ✔ Sí anota cuando declaras sin valor, cuando el tipo debe ser más amplio que el valor inicial, o
  en los parámetros de una función (S2), donde TypeScript no puede adivinar nada.

En VS Code, pon el cursor sobre una variable y te dirá el tipo que ha inferido. Úsalo mucho: es la
forma más rápida de comprobar si has entendido lo que está pasando.

### Los tres tipos básicos

```ts
const texto: string = "comillas dobles o simples, da igual";
const numero: number = 42;
const activo: boolean = true;
```

Sobre `number`, y esto es un cambio real respecto a C/C++/C#:

> **Solo hay un tipo numérico.** No existen `int`, `long`, `float`, `double`, `decimal`.
> Todo `number` es un decimal de 64 bits (el `double` de C#).

Por tanto:

```ts
10 / 3        // 3.3333333333333335   ← ¡no es 3! No hay división entera
0.1 + 0.2     // 0.30000000000000004  ← el mismo problema que en C# con double
```

Esto lo tocarás en el ejercicio 3, porque es una fuente de errores muy real.

### `null` y `undefined`: hay dos formas de "nada"

| | Significado habitual |
|---|---|
| `undefined` | "esto no tiene valor todavía" o "esto no existe". Es lo que sale por defecto. |
| `null` | "esto está vacío **a propósito**". Lo pone una persona, o la base de datos. |

```ts
let sinValor;                            // undefined automáticamente
const descuento: number | null = null;   // "no hay descuento, y es intencionado"
```

Ese `number | null` se lee "number **o** null" y se llama tipo unión. Es la construcción más
característica de TypeScript y le dedicaremos tiempo en S3.

Con `strict` activado (nuestro caso, y el del proyecto real), TypeScript **te obliga a comprobar**
antes de usar algo que pueda ser `null`:

```ts
const descuento: number | null = null;
const precio = 100 - descuento;          // ✗ 'descuento' is possibly 'null'

if (descuento !== null) {
  const precio = 100 - descuento;        // ✔ aquí dentro, ya sabe que es number
}
```

Ese `if` que "estrecha" el tipo se llama *narrowing* y es la mitad del trabajo de escribir
TypeScript. Reconoce el patrón; se explicará a fondo más adelante.

### Texto: plantillas con acento invertido

Tres formas de escribir texto, y la tercera es la que se usa en el 90 % de los casos:

```ts
const nombre = "Ana";
const edad = 30;

"comillas dobles"
'comillas simples: idénticas, es cuestión de estilo'
`Hola ${nombre}, tienes ${edad} años`      // ← plantilla, con acento invertido
```

La plantilla usa **acento invertido** (backtick), no comilla normal. En teclado español se escribe
con `AltGr + ]` (o `` ` `` seguido de espacio). Dentro admite `${cualquier expresión}` — es el
`$"…{x}…"` de C#. Además puede ocupar varias líneas tal cual:

```ts
const recibo = `Cliente: ${nombre}
Total: ${100 * 1.21} €`;
```

### Imprimir

```ts
console.log("Hola");                             // el Console.WriteLine de C#
console.log("Nombre:", nombre, "Edad:", edad);   // varios valores separados por comas
```

`console.log` acepta cualquier cosa, incluidos objetos y arrays, y los muestra de forma legible.
Es tu herramienta de depuración durante todo el bloque.

### Detalles de estilo

- El **punto y coma es opcional**. Los equipos eligen y el formateador automático lo aplica. El
  proyecto real los usa, así que en el curso también.
- Los comentarios son iguales que en C#: `//` y `/* … */`.
- La convención de nombres es `camelCase` para variables y funciones (no `PascalCase` como en C#) y
  `PascalCase` para tipos y componentes de React.

---

## 5. Errores típicos de los primeros días

| Síntoma | Causa |
|---|---|
| `Cannot find module 'C:\...\ej1.ts'` | Estás en la carpeta equivocada. `node` busca la ruta relativa a donde tienes la terminal. |
| Escribes `'` en una plantilla y `${x}` sale literal | Necesita acento invertido, no comilla simple. |
| `npm run check` no encuentra `tsc` | Falta `npm install`, o lo estás ejecutando fuera de `01-typescript/`. |
| `10 / 3` da un decimal y esperabas 3 | Correcto: no hay división entera. Se resuelve con `Math.trunc(10 / 3)`. |
| Un error de tipos y aun así el programa funciona | Es lo esperado. Los tipos se borran al ejecutar (§3). |

---

## 6. Lo que hay que llevarse de esta sesión

1. Node ejecuta JavaScript (y ya también TypeScript) en tu ordenador, sin navegador.
2. `package.json` declara el proyecto; `node_modules/` es descargable y desechable.
3. Los tipos de TypeScript **desaparecen al ejecutar**: son un revisor, no parte del programa.
4. `const` por defecto, `let` solo si reasignas, `var` nunca.
5. El tipo se escribe después del nombre, y casi siempre se puede omitir porque se infiere.
6. Un solo tipo numérico: `number`. No hay división entera.
7. `null` y `undefined` son distintos, y con `strict` hay que comprobarlos antes de usarlos.
8. El texto se compone con plantillas.

Ahora ve a [ejercicios.md](ejercicios.md).
