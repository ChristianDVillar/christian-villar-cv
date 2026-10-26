# Christian Villar — CV

CV web bilingüe (ES/EN) de especialista en operaciones IT y soporte N1/N2.

## Estructura

```
christian-villar-cv/
├── index.html          # CV completo (PDF: 2 hojas A4)
├── index-short.html    # CV resumido (PDF: 1 hoja A4)
├── css/styles.css
├── js/script.js
├── server.py           # servidor local opcional
└── _source/            # borradores y material de trabajo (no publicado)
```

## Cómo ejecutarlo

```bash
python -m http.server 8000
```

O bien:

```bash
python server.py
```

Abre http://localhost:8000

- Completo: http://localhost:8000/index.html
- Resumido: http://localhost:8000/index-short.html
- Inglés forzado: añade `?lang=en` (por ejemplo `index.html?lang=en`)
- Español forzado: `?lang=es`

Si la dirección no lleva `lang`, se usa el idioma guardado en el navegador. Un valor distinto de `es` o `en` (por ejemplo `?lang=fr`) deja la página en español.

## Imprimir / PDF

1. Elige ES o EN (o abre con `?lang=`).
2. **Descargar PDF** guarda el archivo ya exportado en `pdf/` según el idioma activo.
3. **Imprimir / PDF** abre el diálogo del navegador. En Más opciones / More settings, desmarca **Encabezados y pies de página**.

Archivos en `pdf/`:

- `cv-completo-es.pdf` / `cv-completo-en.pdf` (2 hojas A4)
- `cv-resumido-es.pdf` / `cv-resumido-en.pdf` (1 hoja A4)

El resumido debe caber en **una hoja A4**. El completo, en **dos**.

## Características

- Bilingüe ES/EN, con prioridad de la URL sobre el idioma guardado
- El enlace entre la versión completa y la resumida conserva el idioma y el resto de parámetros
- Navegación por secciones
- Diseño adaptable (móvil sin desplazamiento horizontal)
- Impresión estilo europeo en blanco
