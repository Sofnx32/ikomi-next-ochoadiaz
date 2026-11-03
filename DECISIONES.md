# Registro de Decisiones Técnicas y de Arquitectura (ADR)

Este documento registra las decisiones clave de arquitectura, tecnologías y herramientas elegidas durante el desarrollo del proyecto **ikomi-next-ochoadiaz**, junto con las alternativas consideradas y la justificación correspondiente.

## Tabla de Decisiones

| Opción Elegida | Alternativa Descartada | Justificación |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript | Evita errores de tipos en props de componentes como `ProductCard`, mejora el autocompletado y facilita la refactorización a escala. |
| **Tailwind CSS** | CSS Modules / Bootstrap | Elimina el sobrepeso de clases pre-construidas e inflexibles frente a Bootstrap y evita la dispersión en múltiples archivos `.module.css`, centralizando el diseño con utilidades. |
| **Next.js (App Router)** | React SPA (Vite / CRA) | Renderizado optimizado en servidor (SSR/SSG), soporte nativo de metadatos para SEO y enrutamiento automático basado en carpetas. |
| **Navbar con `"use client"`** | Navbar como Server Component | Requiere `usePathname()` para resaltar la página activa y `useState()` para el menú hamburguesa móvil. El resto de páginas permanecen como Server Components para preservar la velocidad y SEO. |
| **Estructura de rutas plana** | Layouts anidados complejos o `(marketing)` | Todas las páginas comparten el mismo `RootLayout` (Navbar y Footer). Usar grupos de rutas añadiría carpetas sin aportar beneficios visuales ni de lógica. |
| **DataSet centralizado (`app/data/productos.ts`)** | Props aisladas en componentes o datos en duro en vistas | Centraliza la fuente de verdad del catálogo, reutilizando la interfaz `Producto` tanto en la grilla principal como en la ruta dinámica `/productos/[slug]`. |
| **Componentes `next/image` y `next/font`** | Etiqueta `<img>` nativa y Google Fonts por CDN | Previene saltos de maquetación (CLS), aplica optimización de formato automática (WebP/AVIF) y elimina peticiones HTTP externas mediante el auto-hospedaje de fuentes. |

---

*Última actualización: Noviembre 2026*