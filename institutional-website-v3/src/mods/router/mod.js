/* mapa de rotas: hash → nome do arquivo da pagina */
const ROUTE_MAP = {
  home: 'home',
  docs: 'docs',
  playground: 'playground'
};

let currentRoute = null;
let seoApi = null;

/* carrega a pagina correspondente ao hash atual via import dinamico */
const loadRoute = async ({ CoreModule, render, i18n, mainElement, seo }) => {
  const hash = location.hash.replace(/^#\//, '').replace(/^#/, '') || 'home';
  const route = ROUTE_MAP[hash] || 'home';

  if (route === currentRoute) return;
  currentRoute = route;

  try {
    const pageModule = await import(`./pages/${route}.json`);
    const pageData = pageModule.default || pageModule;

    i18n.resetToShell();

    const { resolved, stateMap } = i18n.resolveStruct(pageData);
    i18n.adoptStateMap(stateMap);

    render.page({ CoreModule, parent: mainElement, struct: resolved });

    seo.updateHead({ route, i18n });
  } catch (err) {
    console.error(`Erro ao carregar rota "${route}":`, err);
    mainElement.innerHTML = '<p>Erro ao carregar pagina.</p>';
  }
};

const modInterface = Object.create(null);

/* inicia o roteador: carrega rota inicial e escuta hashchange */
modInterface.start = ({ CoreModule, render, i18n, mainElement, seo }) => {
  seoApi = seo;
  loadRoute({ CoreModule, render, i18n, mainElement, seo });

  window.addEventListener('hashchange', () => {
    loadRoute({ CoreModule, render, i18n, mainElement, seo });
  });
};

/* reaplica o SEO do head para a rota atual (usado ao trocar idioma) */
modInterface.refreshHead = ({ i18n }) => {
  if (currentRoute) seoApi?.updateHead({ route: currentRoute, i18n });
};

export const router = Object.freeze(modInterface);
