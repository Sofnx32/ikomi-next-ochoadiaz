# Registro de Decisiones Técnicas y de Arquitectura (ADR)

Este documento registra las decisiones clave de arquitectura, tecnologías y herramientas elegidas durante el desarrollo del proyecto, junto con las alternativas consideradas y la justificación correspondiente.

## Tabla de Decisiones

| Opción Elegida | Alternativa Descartada | Justificación |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript | Evita errores de tipos en props de componentes como `ProductCard`, mejora el autocompletado y facilita la refactorización a escala. |
| **Tailwind CSS** | CSS Modules / Styled Components | Permite un prototipado rápido, mantiene las reglas de estilo cerca del markup sin archivos extra y optimiza el tamaño del bundle en producción. |
| **Next.js (App Router)** | React SPA (Vite / CRA) | Renderizado optimizado (SSR/SSG), manejo de metadatos para SEO y enrutamiento automático basado en archivos. |
| **Navbar con `"use client"`** | Navbar como Server Component | Requiere `usePathname()` para resaltar la página activa y `useState()` para abrir/cerrar el menú hamburguesa. El resto de páginas permanecen como Server Components para preservar la velocidad y SEO. |
| **Estructura de rutas plana** | Layouts anidados complejos o `(marketing)` | Para IKOMI, todas las páginas comparten `RootLayout` (Navbar y Footer). Usar grupos de rutas añadiría carpetas sin aportar beneficios lógicos. |

---

*Última actualización: Noviembre 2026*