/* URL canonica do site (raiz e rotas internas usam a mesma base) */
const SITE_URL = 'https://simplybuilder.github.io/';

/* rota → caminho i18n das chaves de titulo/descricao (home usa bloco proprio seo.home) */
const ROUTE_I18N = {
  home: 'seo.home',
  docs: 'pages.docs',
  playground: 'pages.playground'
};

const resolveText = (i18n, path, fallback = '') =>
  i18n.resolvePath(i18n.getTranslations(), path) || fallback;

/* titulo da pagina: internas recebem o sufixo da marca */
const getTitle = (i18n, route) => {
  if (route === 'home') {
    return resolveText(i18n, 'seo.home.title', document.title);
  }
  return `${resolveText(i18n, `${ROUTE_I18N[route]}.title`)} – SimplyBuilder`;
};

const getDesc = (i18n, route) =>
  resolveText(i18n, `${ROUTE_I18N[route]}.desc`, document.querySelector('meta[name="description"]')?.content || '');

/* URL canonica distinta por rota (home = raiz) */
const getCanonical = (route) =>
  route === 'home' ? SITE_URL : `${SITE_URL}#/${route}`;

/* atualiza (ou cria) uma meta tag e seu conteudo */
const setMeta = (attr, name, content) => {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

/* atualiza (ou cria) um link e seu href */
const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const modInterface = Object.create(null);

/* atualiza title/description/canonical/og/twitter e lang para a rota atual */
modInterface.updateHead = ({ route, i18n }) => {
  const lang = i18n.getLanguage();
  document.documentElement.lang = lang === 'en-us' ? 'en' : 'pt-BR';

  const title = getTitle(i18n, route);
  const desc = getDesc(i18n, route);
  const url = getCanonical(route);

  document.title = title;
  setMeta('name', 'description', desc);
  setLink('canonical', url);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', desc);
};

export const seo = Object.freeze(modInterface);
