import { CoreModule } from '@simplybuilder/core';
import '@styles/main.scss';

window.document.addEventListener('DOMContentLoaded', async () => {
  try {
    const [{ app }, { i18n }, { shell }, { render }, { router }, { seo }] = await Promise.all([
      import('@mods/app/mod.js'),
      import('@mods/i18n/mod.js'),
      import('@mods/shell/mod.js'),
      import('@mods/render/mod.js'),
      import('@mods/router/mod.js'),
      import('@mods/seo/mod.js')
    ]);

    app.start({ CoreModule, i18n, shell, render, router, seo });
  } catch (err) {
    console.error('Falha ao carregar módulos da aplicação:', err);
    document.body.innerHTML = '<p>Erro ao iniciar aplicação.</p>';
  }
});
