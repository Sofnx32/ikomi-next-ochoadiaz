# Bitácora de Uso de Inteligencia Artificial

## Entrada 1: Configuración de Ruta Dinámica
- **Objetivo:** Crear la página de detalle de producto `/productos/[slug]`.
- **Prompt:** "Cómo crear una ruta dinámica en Next.js App Router para mostrar detalles de un producto".
- **Respuesta IA:** Generó el código usando `getStaticProps` y `getStaticPaths`.
- **Decisión:** Rechazado.
- **Justificación:** `getStaticProps` pertenece al Pages Router obsoleto. En App Router, los datos se fetchean directamente en el componente servidor de forma asíncrona.

## Entrada 2: Optimización de Imágenes
- **Objetivo:** Insertar el banner principal en el Hero.
- **Prompt:** "Cómo agregar una imagen de fondo responsiva en Next.js".
- **Respuesta IA:** Sugirió usar la etiqueta estándar `<img src="..." />` con CSS `object-fit`.
- **Decisión:** Modificado.
- **Justificación:** Next.js provee `<Image />` que optimiza automáticamente el peso y formato. Usar `<img>` nativo penaliza el rendimiento y el SEO.

## Entrada 3: Enlace Activo en Navbar
- **Objetivo:** Resaltar el menú de navegación según la URL actual.
- **Prompt:** "Cómo saber la ruta actual en Next.js para poner una clase activa".
- **Respuesta IA:** Sugirió importar `useRouter` de `next/router` y usar `router.pathname`.
- **Decisión:** Modificado.
- **Justificación:** En App Router, `next/router` no funciona igual. Se debe usar `usePathname` de `next/navigation` y el componente debe ser marcado con `'use client'`.

## Entrada 4: Estilos Globales
- **Objetivo:** Definir colores corporativos.
- **Prompt:** "Cómo configurar variables CSS en Next.js con Tailwind".
- **Respuesta IA:** Propuso crear un archivo `variables.css` e importarlo en cada componente.
- **Decisión:** Aceptado con modificaciones.
- **Justificación:** Tailwind permite extender el tema en `tailwind.config.ts`. Es mejor usar la configuración nativa de Tailwind para mantener las utilidades consistentes en lugar de CSS puro.

## Entrada 5: Formulario de Contacto
- **Objetivo:** Crear el formulario visual de contacto.
- **Prompt:** "Crea un formulario de contacto en React con validación".
- **Respuesta IA:** Generó un componente con `useState` pero sin la directiva `'use client'`.
- **Decisión:** Modificado.
- **Justificación:** Al usar hooks de React (`useState`), Next.js exige la directiva `'use client'` en la primera línea, de lo contrario falla la compilación.