# Progreso del curso

> Fichero de estado. Si retomo el curso después de días, empiezo por aquí.
> **Instrucción para Claude:** lee este fichero antes de generar o corregir cualquier sesión, y
> actualízalo al final de cada corrección.

**Sesión actual:** Bloque 1 · S2 — Funciones, objetos y arrays → *pendiente de que yo la resuelva*

---

## Bloque 1 · TypeScript sin frameworks

| Sesión | Tema | Estado | Corregida el |
|---|---|---|---|
| S1 | Entorno y tipos | ✅ corregida | 2026-08-20 |
| S2 | Funciones, objetos y arrays | 📄 generada, sin resolver | — |
| S3 | Transformar datos sin bucles | ⏳ no generada | — |
| S4 | Asíncrono: promesas y `async`/`await` | ⏳ no generada | — |

Estados: ⏳ no generada · 📄 generada · ✍️ resuelta, pendiente de corregir · ✅ corregida

---

## Dudas abiertas

*(vacío)*

---

## Conceptos que me han costado

Lo que salió en la corrección de S1 y hay que seguir vigilando:

- **`const` por defecto, `let` solo si reasignas.** Salió tres veces (ej1 `edad`, ej2 `categoria`,
  ej4). Aún no es automático.
- **No poner valores iniciales falsos** (`let total: number = 0`) cuando se asigna en todas las
  ramas del `if`: apaga el aviso *"used before being assigned"*, que es justo la red de seguridad.
- **Cubrir siempre la rama `else`.** En ej2 el `console.log` acabó dentro del `if` y el programa
  dejó de imprimir una línea sin que fallara nada. Lección grabada: *que el compilador calle no
  significa que el programa haga lo que debe*.
- **Seguir el formato de salida especificado al pie de la letra** (ej4: nombre a mano en vez de
  `${nombre}`, faltaba `toFixed(2)`, `"0 %"` en lugar de `"no aplicado"`).
- **Decimales y dinero.** Aplicó la idea de los céntimos por iniciativa propia, muy bien; le faltaba
  el `Math.round` en la conversión y tras el descuento.

Conceptos que quedaron sólidos: inferencia de tipos, plantillas multilínea, `!= null` como idioma,
uso del hover de VS Code para leer el tipo inferido.

Adelantados en la corrección y que reaparecerán: operador ternario `? :`, ámbito de bloque.

---

## Calibración del ritmo

Objetivo por sesión: teoría < 20 min, ejercicios < 40 min.

| Sesión | Teoría (real) | Ejercicios (real) | Nota |
|---|---|---|---|
| S1 | — | — | Corregida ejercicio a ejercicio, a petición mía. Funcionó bien. |
| S2 | — | — | — |

Si una sesión se pasa mucho de esas cifras, la siguiente se hace más corta.
