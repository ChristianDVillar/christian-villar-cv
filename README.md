# Christian Villar — CV

CV web bilingüe (ES/EN) orientado a **IT Support Specialist** para candidaturas en España y Europa, con perfil ATS dedicado y descarga de PDF.

## Estructura

```
christian-villar-cv/
├── index.html                 # CV visual completo (2 hojas A4)
├── index-short.html           # CV visual resumido (1 hoja A4)
├── profiles/
│   └── it-support.html        # CV ATS IT Support (EN/ES)
├── css/styles.css
├── css/ats.css
├── js/script.js
├── assets/favicon.svg
├── pdf/
│   ├── cv-completo-*.pdf
│   ├── cv-resumido-*.pdf
│   └── it-support/christian-villar-it-support-*.pdf
├── server.py
└── _source/                   # borradores locales (no publicados)
```

## Cómo ejecutarlo

```bash
python -m http.server 8000
```

O `python server.py` → http://localhost:8000

- Completo: `/index.html`
- Resumido: `/index-short.html`
- ATS IT Support: `/profiles/it-support.html`
- Idioma: `?lang=en` o `?lang=es`

## PDF

1. Elige ES o EN.
2. **Descargar PDF** usa el archivo en `pdf/` según idioma.
3. **Imprimir / PDF** abre el diálogo del navegador (desmarca encabezados y pies).

## Estrategia de perfiles

| Perfil | Estado | Uso |
| --- | --- | --- |
| IT Support (principal) | Publicado | Service Desk, Help Desk, Desktop Support Europa |
| Technical Support / SaaS | Pendiente | Application / SaaS support |
| Full Stack Junior | Pendiente | Desarrollo como vía secundaria |

## Características

- Bilingüe ES/EN (URL prioriza sobre localStorage)
- Open Graph + favicon + schema.org Person
- Proyectos con aportación personal y estado realista
- Disponibilidad inmediata y movilidad europea
