# 📝 Blog Next.js + MDX

Una aplicación de Blog moderna construida con **Next.js 13**, **MDX** y **ContentLayer**. Este proyecto permite crear y gestionar artículos de blog en formato MDX con una experiencia de usuario fluida, resaltado de código avanzado y paginación integrada.

## 🎯 Descripción del Proyecto

Este es un **blog** que utiliza:

- **MDX** para escribir contenido con componentes React interactivos
- **ContentLayer** para la gestión y validación automática del contenido
- **Next.js 13** con App Router para navegación moderna
- **Tailwind CSS** para estilos responsivos y modernos
- **Rehype Pretty Code** con Shiki para resaltado de código con temas profesionales

### Características Principales

✨ **Características**:

- 📚 Gestión de posts en formato MDX
- 🎨 Resaltado de código profesional con tema "One Dark Pro"
- 📖 Paginación automática de posts
- 🔗 URLs amigables para SEO (`/blog/[slug]`)
- ⚡ Rendimiento optimizado con Next.js 13
- 🔍 Metadatos SEO automáticos
- 📋 Validación de contenido con TypeScript

---

## 🛠️ Tecnologías Utilizadas

| Tecnología             | Versión | Propósito                         |
| ---------------------- | ------- | --------------------------------- |
| **Next.js**            | 13.4.4  | Framework React con SSR y SSG     |
| **React**              | 18.2.0  | Biblioteca UI                     |
| **TypeScript**         | 5.1.3   | Tipado estático                   |
| **ContentLayer**       | 0.3.3   | Gestión y validación de contenido |
| **MDX**                | -       | Markdown con componentes React    |
| **Tailwind CSS**       | 3.3.2   | Framework CSS utilidad-first      |
| **Rehype Pretty Code** | 0.9.7   | Resaltado de sintaxis             |
| **Shiki**              | 0.14.2  | Engine de resaltado de código     |
| **PostCSS**            | 8.4.24  | Herramienta CSS moderna           |
| **Autoprefixer**       | 10.4.14 | Prefijos CSS automáticos          |

### Herramientas de Desarrollo

- **ESLint**: Análisis de código estático
- **Prettier**: Formateador de código
- **prettier-plugin-tailwindcss**: Ordenamiento automático de clases Tailwind

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 16.x o superior
- **npm** 8.x o superior (o **yarn**, **pnpm**)

Verifica las versiones instaladas:

```bash
node --version
npm --version
```

---

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio

```bash
git clone https://github.com/agdwm/UDEMY_03_Blog_Next_MDX
cd UDEMY_03_Blog_Next_MDX
```

### 2. Instalar Dependencias

```bash
npm install
```

Este comando instala todas las dependencias necesarias definidas en `package.json`.

### 3. Estructura del Proyecto

```
UDEMY_03_Blog_Next_MDX/
├── contentlayer.config.ts      # Configuración de ContentLayer
├── next.config.js              # Configuración de Next.js
├── tailwind.config.js          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── posts/                       # Archivos MDX de los posts
│   ├── 01-blog.mdx
│   ├── 02-blog.mdx
│   └── ...
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página de inicio
│   │   ├── not-found.tsx       # Página 404
│   │   ├── blog/
│   │   │   ├── page.tsx        # Lista de posts con paginación
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Detalle del post individual
│   │   └── page/
│   │       └── [number]/
│   │           └── page.tsx    # Paginación
│   ├── components/
│   │   ├── post/
│   │   │   ├── PostItem.tsx    # Componente de un post
│   │   │   ├── PostList.tsx    # Lista de posts
│   │   │   └── PostPagination.tsx # Control de paginación
│   │   └── ui/
│   │       ├── ButtonBack.tsx  # Botón de retroceso
│   │       ├── ButtonLink.tsx  # Botón de enlace
│   │       ├── Container.tsx   # Contenedor wrapper
│   │       └── Content.tsx     # Contenedor de contenido
│   ├── types/
│   │   └── images.d.ts         # Tipos para imágenes
│   └── utils/
│       └── pagination.ts       # Lógica de paginación
├── public/                      # Archivos estáticos
└── package.json
```

---

## 🏃 Ejecución del Proyecto

### Modo Desarrollo

Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3000**

### Modo Producción

#### Build

Compila la aplicación para producción:

```bash
npm run build
```

#### Start

Inicia el servidor optimizado:

```bash
npm start
```

### Linting

Valida el código con ESLint:

```bash
npm run lint
```

---

## 📝 Crear Nuevos Posts

### Formato de un Post MDX

Los posts deben estar en la carpeta `/posts/` en formato MDX con la siguiente estructura:

**Ejemplo: `posts/01-my-post.mdx`**

````mdx
---
title: "Mi Primer Post"
description: "Una descripción breve del contenido"
date: "2024-12-18"
---

# Bienvenido a mi blog

Este es el contenido de mi primer post.

## Subtítulo

Puedes usar **Markdown** y también componentes React:

```typescript
// Ejemplo de código con resaltado
const greeting = "Hello, World!";
console.log(greeting);
```
````

### Metadatos Requeridos

- **title** (string): Título del post
- **description** (string): Descripción corta (para SEO)
- **date** (date): Fecha de publicación (formato: YYYY-MM-DD)

---

## ⚙️ Configuración

### ContentLayer (`contentlayer.config.ts`)

Define la estructura de los posts y opciones de resaltado de código:

- **Tema de Shiki**: `one-dark-pro`
- **Fondo**: Mantiene el color de fondo del tema
- **Extensión**: Soporta archivos `.mdx`

### Tailwind CSS (`tailwind.config.js`)

Configuración de estilos utilidad-first para un diseño responsivo.

### Next.js (`next.config.js`)

Configuración del framework y integración con ContentLayer.

---

## 📊 Flujo de Datos

```
Posts (MDX) → ContentLayer → Generated Types
                         ↓
                    Next.js Pages
                         ↓
                    React Components
                         ↓
                    Navegador (SSR/SSG)
```

---

## 🎨 Personalización

### Cambiar Tema de Resaltado

En `contentlayer.config.ts`, modifica la propiedad `theme`:

```typescript
const rehypeoptions = {
  theme: "nord", // Cambia a otro tema de Shiki
  // ... resto de opciones
};
```

Temas disponibles en [Shiki Themes](https://github.com/shikijs/shiki/blob/main/docs/themes.md).

### Modificar Estilos

Los estilos están principalmente en:

- `src/app/globals.css` - Estilos globales
- Componentes con Tailwind CSS classes
- `tailwind.config.js` - Configuración de colores y extensiones

---

## 🔍 Variables de Entorno

Actualmente el proyecto no requiere variables de entorno. Si necesitas agregarlas:

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Define tus variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```
3. Accede desde el código con `process.env.NOMBRE_VARIABLE`

---

## 📚 Recursos Útiles

- [Documentación de Next.js 13](https://nextjs.org/docs)
- [ContentLayer Documentation](https://www.contentlayer.dev/)
- [MDX Specification](https://mdxjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shiki Themes](https://github.com/shikijs/shiki)

---

## 🐛 Solución de Problemas

### Error: "ContentLayer not found"

Ejecuta el build de Next.js:

```bash
npm run build
```

### Puerto 3000 ya está en uso

Especifica otro puerto:

```bash
npm run dev -- -p 3001
```

### Cambios en MDX no se reflejan

Reinicia el servidor de desarrollo:

```bash
# Presiona Ctrl+C y luego
npm run dev
```

---

## 📄 Licencia

Este proyecto es de uso educativo. Siéntete libre de adaptarlo a tus necesidades.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del curso Udemy de Next.js:
[React JS con TypeScript y Next.js Curso Desarrollo FullStack]: (https://www.udemy.com/course/curso-react-js/)

---

## 💡 Próximas Mejoras

- [ ] Sistema de comentarios
- [ ] Búsqueda de posts
- [ ] Categorías y etiquetas
- [ ] Newsletter subscription
- [ ] Compartir en redes sociales
- [ ] Modo oscuro/claro

---

**¡Disfruta creando tu blog!** 🚀

```
npm i rehype-pretty-code shiki
```

## Documentation

- [ContentLayer](https://www.contentlayer.dev/docs/getting-started-cddd76b7)
- [Bluuweb Guide](https://bluuweb.dev/09-next/03-blog.html)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
