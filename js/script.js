(() => {
  const DEFAULT_LANG = "es";
  const SUPPORTED_LANGS = ["es", "en"];

  function getSavedLang() {
    try {
      const params = new URLSearchParams(window.location.search);

      // La URL tiene prioridad sobre localStorage.
      // Un valor distinto de es o en vuelve al español.
      if (params.has("lang")) {
        const requested = params.get("lang");
        return SUPPORTED_LANGS.includes(requested) ? requested : DEFAULT_LANG;
      }

      const saved = localStorage.getItem("lang");

      return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  }

  function updateDownloadLinks(lang) {
    document.querySelectorAll(".download-cv").forEach((link) => {
      const href = link.getAttribute(`data-pdf-${lang}`);

      if (href) {
        link.setAttribute("href", href);
      }
    });
  }

  function saveLang(lang) {
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // La web funciona aunque no se pueda guardar el idioma.
    }
  }

  function updateVersionLinks(lang) {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");

      if (!href) return;

      // Solo modificar enlaces a las dos páginas del CV.
      const match = href.match(
        /^((?:\.\/)?index(?:-short)?\.html)(?:\?[^#]*)?(#.*)?$/
      );

      if (!match) return;

      const path = match[1];
      const hash = match[2] || "";

      const url = new URL(href, window.location.href);
      url.searchParams.set("lang", lang);

      // Conserva los parámetros existentes y el fragmento.
      link.setAttribute(
        "href",
        `${path}?${url.searchParams.toString()}${hash}`
      );
    });
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      lang = DEFAULT_LANG;
    }

    // Traducir elementos de texto sin reemplazar contenido anidado.
    document.querySelectorAll("[data-es]").forEach((el) => {
      if (el.tagName === "META" || el.children.length > 0) {
        return;
      }

      const value = el.getAttribute(`data-${lang}`);

      if (value !== null) {
        el.textContent = value;
      }
    });

    // Etiquetas accesibles de navegación y controles.
    document.querySelectorAll("[data-aria-es]").forEach((el) => {
      const value = el.getAttribute(`data-aria-${lang}`);

      if (value !== null) {
        el.setAttribute("aria-label", value);
      }
    });

    // Descripción de la página.
    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
      const description = meta.getAttribute(`data-${lang}`);

      if (description !== null) {
        meta.setAttribute("content", description);
      }
    }

    // Título de la pestaña.
    const title = document.body.getAttribute(`data-title-${lang}`);

    if (title) {
      document.title = title;
    }

    // Idioma declarado del documento.
    document.documentElement.lang = lang;

    // Enlaces entre index.html e index-short.html.
    updateVersionLinks(lang);

    // PDF descargable según el idioma activo.
    updateDownloadLinks(lang);

    // Estado visual y accesible del selector.
    SUPPORTED_LANGS.forEach((code) => {
      const button = document.getElementById(`btn-${code}`);

      if (!button) return;

      const active = code === lang;

      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("active", active);
    });

    saveLang(lang);
  }

  function bindControls() {
    SUPPORTED_LANGS.forEach((code) => {
      const button = document.getElementById(`btn-${code}`);

      if (!button) return;

      button.addEventListener("click", () => setLang(code));
    });

    document.querySelectorAll(".print-btn").forEach((button) => {
      button.addEventListener("click", () => window.print());
    });
  }

  function initCV() {
    bindControls();
    setLang(getSavedLang());

    const yearEl = document.getElementById("year");

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCV, { once: true });
  } else {
    initCV();
  }
})();
