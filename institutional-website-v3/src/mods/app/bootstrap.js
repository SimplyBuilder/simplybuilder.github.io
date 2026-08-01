const STORAGE_KEY = 'sb_lang';

let clickOutsideHandler = null;

const getCSS = async (url) => {
  if(!url) return undefined;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "text/plain" },
    });
    if(res?.ok) {
      const text = await res.text();
      if(text) { // noinspection RegExpSingleCharAlternation
        return text.toString().trim().replace(/\n|\r/g, "");
      }
    }
  } catch {
    // falha de rede — retorna undefined
  }
};

const modPrivate = Object.create(null);

/* registra listener global para fechar menu ao clicar fora */
modPrivate.registerClickOutside = ({ CoreModule }) => {
  if (clickOutsideHandler) {
    document.removeEventListener('click', clickOutsideHandler);
  }

  clickOutsideHandler = (e) => {
    const menu = CoreModule.getElementFromStore('mobileMenu');
    const btn = CoreModule.getElementFromStore('menuBtn');
    if (menu?.classList.contains('mobile-menu--open')
        && !menu.contains(e.target)
        && !btn?.contains(e.target)) {
      menu.classList.remove('mobile-menu--open');
    }
  };

  document.addEventListener('click', clickOutsideHandler);
};

/* registra todos os eventos da aplicacao no CoreModule */
modPrivate.registerEvents = ({ CoreModule, i18n, router }) => {
  CoreModule.eventRegister('toggleLang', () => {
    const current = i18n.getLanguage();
    const next = current === 'pt-br' ? 'en-us' : 'pt-br';
    i18n.setLanguage(next);
    i18n.updateElements({ CoreModule });
    router.refreshHead({ i18n });

    const btn = CoreModule.getElementFromStore('langBtn');
    if (btn) btn.textContent = next === 'en-us' ? 'PT' : 'EN';
  });

  CoreModule.eventRegister('toggleMenu', (e) => {
    e.stopPropagation();
    CoreModule.getElementFromStore('mobileMenu')?.classList.toggle('mobile-menu--open');
  });

  CoreModule.eventRegister('closeMobileMenu', () => {
    CoreModule.getElementFromStore('mobileMenu')?.classList.remove('mobile-menu--open');
  });

  modPrivate.registerClickOutside({ CoreModule });

  CoreModule.eventRegister('heroCta2', () => {
    window.location.href = '#/docs';
  });

  CoreModule.eventRegister('btnPrimary', () => {
    window.location.href = '#/playground';
  });

  /* --- acoes para a pagina de documentacao --- */

  CoreModule.eventRegister('docsDemoAlert', () => {
    alert('SimplyBuilder Objects work! 🎉');
  });

  CoreModule.eventRegister('docsDemoCounter', () => {
    const el = CoreModule.getElementFromStore('docsCounterDisplay');
    if (el) {
      const current = parseInt(el.textContent, 10) || 0;
      el.textContent = current + 1;
    }
  });

  CoreModule.eventRegister('docsDemoToggle', () => {
    const el = CoreModule.getElementFromStore('docsToggleContent');
    if (el) {
      el.style.display = el.style.display === 'none' ? 'block' : 'none';
    }
  });

  CoreModule.eventRegister('docsSvgColor', () => {
    const svg = CoreModule.getElementFromStore('docsSvgCircle');
    if (svg) {
      const circle = svg.querySelector('circle');
      if (circle) {
        const colors = ['#6c6cf0', '#e06c75', '#61afef', '#98c379', '#d19a66'];
        const current = circle.getAttribute('fill');
        const idx = colors.indexOf(current);
        const next = colors[(idx + 1) % colors.length];
        circle.setAttribute('fill', next);
      }
    }
  });

  /* playground: le JSON do editor, renderiza dentro de shadow DOM fechado */
  CoreModule.eventRegister('playRun', async () => {
    const editor = CoreModule.getElementFromStore('playEditor');
    const cssInput = CoreModule.getElementFromStore('playCssInput');
    const output = CoreModule.getElementFromStore('playOutput');
    const shadowOutput = CoreModule.getElementFromStore('output.playground');
    if (!editor || !output) return;

    if(shadowOutput) CoreModule.removeElement(shadowOutput);

    const schema = {
      element: "div",
      shadow: "closed",
      dataset: { state: "output.playground" },
      children: []
    };

    output.innerHTML = "";
    let struct;
    try {
      struct = JSON.parse(editor.value);
    } catch (e) {
      const pre = document.createElement('pre');
      pre.style.color = '#e06c75';
      pre.textContent = `JSON invalido: ${e.message}`;
      output.appendChild(pre);

      return;
    }
    if(!struct) return;

    if(cssInput?.value) {
      const styles = await getCSS(cssInput?.value.trim());
      if(styles) schema.shadow = {mode: 'closed', styles};
    }

    try {
      if (Array.isArray(struct)) {
        schema.children = struct;
      } else schema.children = [struct];

      CoreModule.createFromStruct({ parent: output, struct: schema });
    } catch (e) {
      const pre = document.createElement('pre');
      pre.style.color = '#e06c75';
      pre.textContent = `Erro ao renderizar: ${e.message}`;
      output.appendChild(pre);
    }
  });
};

const modInterface = Object.create(null);

/* inicializa a aplicacao: carrega idioma, renderiza shell, inicia roteador */
modInterface.init = ({ CoreModule, i18n, shell, render, router, seo }) => {
  const savedLang = localStorage.getItem(STORAGE_KEY) || 'pt-br';
  i18n.setLanguage(savedLang);

  modPrivate.registerEvents({ CoreModule, i18n, router });

  shell.render({ CoreModule, i18n });
  i18n.snapshotShell();

  const langBtn = CoreModule.getElementFromStore('langBtn');
  if (langBtn) langBtn.textContent = savedLang === 'en-us' ? 'PT' : 'EN';

  const mainElement = CoreModule.getElementFromStore('mainContent');
  if (!mainElement) {
    console.error('mainContent nao encontrado no CoreModule store');
    return;
  }

  router.start({ CoreModule, render, i18n, mainElement, seo });
};

export const bootstrap = Object.freeze(modInterface);
