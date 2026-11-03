# Registro de Decisiones Técnicas y de Arquitectura (ADR)

Este documento registra las decisiones clave de arquitectura, tecnologías y herramientas elegidas durante el desarrollo del proyecto, junto con las alternativas consideradas y la justificación correspondiente.

## Tabla de Decisiones

| Opción Elegida | Alternativa Descartada | Justificación |
| :--- | :--- | :--- |
| **TypeScript** | JavaScript | Evita errores de tipos en props de componentes como `ProductCard`, mejora el autocompletado y facilita la refactorización a escala. |
| **Tailwind CSS** | CSS Modules / Styled Components | Permite un prototipado rápido, mantiene las reglas de estilo cerca del markup sin archivos extra y optimiza el tamaño del bundle en producción. |
| **Vite / Next.js** | Create React App / Webpack Manual | Proporciona tiempos de compilación rápidos (HMR casi instantáneo) y una configuración moderna out-of-the-box. |
| **Zustand / React Context** | Redux Toolkit | Minimiza el código repetitivo (boilerplate) y simplifica la gestión del estado global para las necesidades actuales del proyecto. |

---

## Cómo agregar nuevas decisiones

Al tomar una nueva decisión técnica que afecte la estructura o flujo del proyecto, añade una fila a la tabla usando el siguiente formato:

```markdown
| **[Tecnología / Patrón]** | [Alternativa] | [Explicación detallada de la ventaja o motivo del descarte] |
```

---
*Última actualización: Noviembre 2026*
