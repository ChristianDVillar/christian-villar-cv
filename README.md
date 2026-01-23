# Christian Villar - CV Portfolio

Portfolio web bilingüe (ES/EN) con tema claro/oscuro y descarga PDF.

## 📁 Estructura del Proyecto

```
christian-villar-cv/
├── index.html          # Archivo principal HTML
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Lógica JavaScript
├── server.py           # Servidor local Python
├── start.bat           # Script de inicio rápido (Windows)
└── README.md           # Este archivo
```

## 🚀 Cómo ejecutarlo localmente

### Opción 1: Python (más fácil)

Si tienes Python instalado:

```bash
# Python 3
python -m http.server 8000

# O Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: http://localhost:8000

### Opción 2: Node.js

Si tienes Node.js instalado:

```bash
npx http-server -p 8000
```

Luego abre: http://localhost:8000

### Opción 3: Abrir directamente

Simplemente abre `index.html` en tu navegador (algunas funciones pueden no funcionar por CORS).

## ✨ Características

- ✅ Bilingüe (ES/EN) con persistencia
- ✅ Tema claro/oscuro con toggle
- ✅ Descarga PDF del CV
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Optimizado para recruiters

## 🌐 Desplegar gratis

### GitHub Pages

1. Crea un repo en GitHub: `christian-villar-cv`
2. Sube este archivo `index.html`
3. Ve a Settings → Pages
4. Selecciona branch `main` y folder `/root`
5. Tu CV estará en: `https://tuusuario.github.io/christian-villar-cv/`

### Netlify

1. Ve a [netlify.com](https://www.netlify.com)
2. Login con GitHub
3. "Add new site" → "Deploy manually"
4. Arrastra `index.html`
5. ¡Listo! URL tipo: `https://awesome-name.netlify.app`

## 📝 Personalizar

### Contenido
Edita `index.html` y cambia:
- Información de contacto (email, LinkedIn)
- Proyectos y experiencia
- Habilidades

### Estilos
Edita `css/styles.css` y modifica:
- Colores en las variables CSS `:root`
- Tipografías y espaciados
- Animaciones y transiciones

### Funcionalidad
Edita `js/script.js` para:
- Modificar el comportamiento del cambio de idioma
- Ajustar la generación de PDF
- Añadir nuevas funcionalidades