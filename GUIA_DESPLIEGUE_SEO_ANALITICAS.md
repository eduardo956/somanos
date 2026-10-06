---
title: Guía Definitiva de Despliegue Web, SEO, Cloudflare, Vercel & Analíticas
tags:
  - webdev
  - seo
  - vercel
  - cloudflare
  - analytics
  - checklist
date: 2026-10-05
---

# 🚀 Guía Definitiva de Despliegue Web, SEO, Cloudflare, Vercel & Analíticas

Esta guía consolida todo el aprendizaje y mejores prácticas para el despliegue de proyectos web (SPA con Vite/React), configuración de DNS con Cloudflare, optimización SEO de Sitemaps y Favicons, e implementación de analíticas seguras para compartir con clientes.

---

> [!important] Objetivo
> Evitar errores de enrutamiento (404), garantizar la migración forzada a HTTPS (301), estructurar un sitemap válido sin fragmentos `#`, asegurar la correcta indexación de favicons por Google y configurar reportes de analíticas independientes sin comprometer otros proyectos.

---

## 📋 1. Enrutamiento SPA y Archivos de Despliegue (Vercel)

Al construir aplicaciones de una sola página (SPA con React/Vite), el servidor debe redirigir todas las rutas internas hacia `index.html`.

### A. Archivo `vercel.json` (En la raíz del proyecto)
Crea este archivo para evitar errores 404 al recargar la página en rutas secundarias:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### B. Archivo `.gitignore`
Asegúrate de incluir todas las dependencias, salidas de compilación, variables de entorno y carpetas temporales:

```gitignore
# Dependencias
node_modules
.pnpm-store

# Salidas de compilación
dist
dist-ssr
build
.vite

# Variables de entorno
.env
.env.local
*.env

# Vercel & Editores
.vercel
.vscode/*
!.vscode/extensions.json
.DS_Store
Thumbs.db
```

---

## 🔒 2. Configuración de Dominio y SSL con Cloudflare + Vercel

Cuando usas **Cloudflare** como intermediario/DNS delante de **Vercel**:

> [!warning] Problema común
> Si la configuración SSL no es la adecuada, Google puede indexar la versión no segura `http://` en búsquedas indirectas.

### Pasos Obligatorios en el Panel de Cloudflare:
1. **Modo SSL/TLS:** Ve a `SSL/TLS` $\rightarrow$ `Overview` y selecciona **Full (strict)** / **Completo (estricto)**.
   * *Nunca usar "Flexible"*, ya que provoca bucles de redirección o envíos no seguros a Vercel.
2. **Forzar HTTPS (Redirección 301):** Ve a `SSL/TLS` $\rightarrow$ `Edge Certificates` y **ACTIVA** la opción **Always Use HTTPS** (*Usar siempre HTTPS*).
   * Esto garantiza que cualquier petición a `http://midominio.com` devuelva un código HTTP `301 Moved Permanently` a `https://`.
3. **Reescritura automática:** Activa **Automatic HTTPS Rewrites**.

---

## 🗺️ 3. Estructuración Correcta del Sitemap XML (`sitemap.xml`)

> [!danger] ERROR A EVITAR (Lo que se hizo mal anteriormente)
> **NUNCA incluir fragmentos con `#` en las URLs del sitemap** (ejemplo: `https://midominio.com/#catalogo`).
> **Razón:** Googlebot **ignora todo lo que está después del `#`**. Para Google, 4 URLs con `#` son la misma página repetida, lo que genera confusión de contenido duplicado y errores de indexación.

### Reglas para un Sitemap Perfecto:
1. Incluir únicamente **URLs canónicas principales limpias**.
2. Usar el espacio de nombres `xmlns:image` para incluir imágenes clave de productos/marca (posiciona en Google Imágenes).

### Estructura Recomendada (`public/sitemap.xml`):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://midominio.com/</loc>
    <lastmod>2026-10-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    
    <!-- Imágenes del Logotipo y Productos -->
    <image:image>
      <image:loc>https://midominio.com/images/logo.png</image:loc>
      <image:title>Nombre Marca - Descripción Principal</image:title>
    </image:image>
    <image:image>
      <image:loc>https://midominio.com/images/producto1.jpg</image:loc>
      <image:title>Producto 1 - Categoria</image:title>
    </image:image>
  </url>
</urlset>
```

---

## 🎨 4. Configuración de Favicon e Iconos para Google Search

Google usa un robot independiente (`Googlebot-Image`) para indexar los favicons, los cuales guarda en caché severa.

### Declaración Estándar en `<head>` de `index.html`:

```html
<!-- Favicon Tags para Google Search & Navegadores -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/images/icon_app.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/images/icon_app.png" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/images/icon_app.png" />
```

> [!tip] Tiempo de actualización del Favicon
> Aunque solicites la indexación en Google Search Console, el favicon en los resultados de búsqueda de Google puede tardar **de 3 a 14 días** en refrescarse. Puedes consultar la caché actual de Google abriendo:
> `https://www.google.com/s2/favicons?domain=midominio.com&sz=64`

---

## 🔍 5. Google Search Console: Flujo de Indexación Pre-Lanzamiento

Una vez publicado el sitio en Vercel:

1. Ingresar a [Google Search Console](https://search.google.com/search-console).
2. **Enviar Sitemap:** Ir a `Sitemaps` $\rightarrow$ Agregar `sitemap.xml` $\rightarrow$ **Enviar**.
3. **Solicitar Indexación:**
   * En la barra superior, pegar la URL principal: `https://midominio.com/`.
   * Presionar **Enter**.
   * En el cuadro de resultados, hacer clic en **SOLICITAR INDEXACIÓN**.
4. **Verificar Marcado Esquemático:** Confirmar que detecte los bloques JSON-LD (`Brewery`, `Product`, `HTTPS`, etc.).

---

## 📊 6. Analíticas y Reportes para Clientes (Compartir de Forma Segura)

> [!caution] Precaución de Privacidad
> **NUNCA dar acceso a la cuenta global de Cloudflare** a un cliente si tienes múltiples sitios web en esa misma cuenta, porque podrá ver todos tus demás proyectos.

### La Solución Ideal: Google Analytics 4 (GA4) + Looker Studio

#### A. Instalación del código GA4 en `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### B. Construcción del Dashboard en Looker Studio ([lookerstudio.google.com](https://lookerstudio.google.com)):
1. Crear un nuevo informe y conectar el conector de **Google Analytics**.
2. **Gráficos recomendados a incluir:**
   * **Tarjeta de resultados:** `Usuarios activos` o `Vistas`.
   * **Tarjeta de Tiempo Real:** Métrica `Usuarios en los últimos 30 minutos` (para que el cliente vea conectados en vivo).
   * **Gráfico de líneas:** `Fecha` vs `Usuarios activos`.
   * **Tabla:** `Ciudad` o `Fuente de la sesión`.
3. **Compartir con el cliente:**
   * Clic en `+ Compartir` $\rightarrow$ Gestionar acceso $\rightarrow$ **"Cualquier persona con el enlace puede ver"**.
   * Enviar el enlace por WhatsApp.

---

## 📝 7. Lista de Verificación Pre-Publicación (Pre-Flight Checklist)

- [ ] Archivo `vercel.json` creado en la raíz con rewrites hacia `/index.html`.
- [ ] Archivo `.gitignore` verificado.
- [ ] Cloudflare SSL/TLS en **Full (strict)** y **Always Use HTTPS** activado.
- [ ] Archivo `public/sitemap.xml` creado **SIN anclas `#`** y con las imágenes de productos.
- [ ] Favicons declarados correctamente en `index.html` (32x32, 192x192, 512x512).
- [ ] Código de Google Analytics (`G-XXXXXXXXXX`) o GTM insertado en `index.html`.
- [ ] Cambios subidos a GitHub (`git commit` y `git push`).
- [ ] `sitemap.xml` reenviado en Google Search Console.
- [ ] URL `https://midominio.com/` inspeccionada y solicitada su indexación en Search Console.
- [ ] Enlace público de **Looker Studio** generado y enviado al cliente.
