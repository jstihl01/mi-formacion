# mi-formacion

Curso propio para aprender el stack del proyecto de trabajo: **TypeScript, React, Next.js,
MySQL, Prisma y Docker**.

No es documentación de un proyecto: es un cuaderno de estudio. La teoría y los ejercicios los
genera Claude; los ejercicios los resuelvo yo y Claude los corrige.

## Cómo funciona una sesión

Cada sesión está pensada para **45-60 minutos**: ~20 min de teoría, ~40 min de ejercicios.

1. Claude crea la carpeta de la sesión con `teoria.md`, `ejercicios.md` y los ficheros `.ts`
   a medio escribir.
2. Leo `teoria.md`.
3. Resuelvo los `TODO` de los ficheros en `src/`.
4. Le digo a Claude: **"corrígeme la sesión N"**. Me dice qué está bien, qué está mal y por qué.
5. Solo entonces Claude crea la sesión siguiente.

No hay sesiones creadas por adelantado: el temario se ajusta según cómo vaya yendo.

## Cómo retomar después de días sin tocarlo

Abre [PROGRESO.md](PROGRESO.md) y dile a Claude: **"retomamos, mira PROGRESO.md"**. Ahí está la
sesión en curso, lo ya corregido y las dudas que quedaron abiertas.

## Estructura

```
mi-formacion/
├─ README.md            este fichero
├─ PROGRESO.md          estado del curso: sesión actual, correcciones, dudas
└─ 01-typescript/       Bloque 1
   ├─ package.json      dependencias del bloque (solo typescript)
   ├─ tsconfig.json     configuración del comprobador de tipos
   └─ S1-entorno-y-tipos/
      ├─ teoria.md
      ├─ ejercicios.md
      └─ src/
```

Cada bloque es una carpeta numerada con su propio `package.json`. Los bloques futuros serán
`02-react/`, `03-nextjs/`, etc.

## Plan del curso

| Bloque | Contenido | Estado |
|---|---|---|
| 1 · TypeScript | Tipos, funciones, objetos, transformar datos, asíncrono | **en curso** |
| 2 · React | Componentes, JSX, props, estado, eventos | por definir |
| 3 · Next.js | App Router, servidor vs cliente, formularios | por definir |
| 4 · Docker + MySQL | Contenedor de MySQL, SQL básico | por definir |
| 5 · Prisma | Esquema, migraciones, consultas tipadas | por definir |
| 6 · Integración | Mini-proyecto que une todo | por definir |
| 7 · Aterrizaje | Leer y modificar el proyecto real | por definir |

El detalle de cada bloque se escribe **cuando llegamos a él**, no antes.
