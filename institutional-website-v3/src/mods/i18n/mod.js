import en from './data/en.json';
import pt from './data/pt.json';
import { resolver } from './resolver.js';

const translations = { 'en-us': en, 'pt-br': pt };
const STORAGE_KEY = 'sb_lang';

let currentLang = 'pt-br';
let stateMap = new Map();
let shellSnapshot = [];

const modInterface = Object.create(null);

/* retorna o objeto de traducoes do idioma ativo */
const getTranslations = () => translations[currentLang] || translations['pt-br'];

/* retorna o codigo do idioma atual (ex: "pt-br") */
modInterface.getLanguage = () => currentLang;

/* retorna o objeto de traducoes do idioma ativo */
modInterface.getTranslations = getTranslations;

/* define o idioma e persiste no localStorage */
modInterface.setLanguage = (lang) => {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
};

/* percorre o struct resolvendo placeholders $t: / $th: e monta o stateMap */
modInterface.resolveStruct = (struct) => {
  const localMap = new Map();
  const resolved = resolver.resolveNode(struct, getTranslations(), localMap);
  return { resolved, stateMap: localMap };
};

/* salva o stateMap atual como snapshot (usado para preservar o shell) */
modInterface.snapshotShell = () => {
  shellSnapshot = [...stateMap.entries()];
};

/* restaura o stateMap para conter apenas entradas do shell */
modInterface.resetToShell = () => {
  stateMap = new Map(shellSnapshot);
};

/* mescla um novo stateMap (ex: de uma pagina) no stateMap global */
modInterface.adoptStateMap = (newMap) => {
  newMap.forEach((val, key) => stateMap.set(key, val));
};

/* atualiza o texto de todos elementos com $t:/$th: (usado ao trocar idioma) */
modInterface.updateElements = ({ CoreModule }) => {
  const t = getTranslations();

  for (const [stateKey, info] of stateMap) {
    const el = CoreModule.getElementFromStore(stateKey);
    if (!el) continue;
    const val = resolver.resolvePath(t, info.path);
    if (info.isHtml) el.innerHTML = val;
    else el.textContent = val;
  }

  /* aplica a traducao a um elemento marcado com data-i18n-path */
  const applyElement = (el) => {
    const path = el.dataset.i18nPath;
    if (!path) return;
    const isHtml = el.dataset.i18nType === 'html';
    const val = resolver.resolvePath(t, path);
    if (isHtml) el.innerHTML = val;
    else el.textContent = val;
  };

  /* percorre um root (document ou shadowRoot) aplicando traducoes e entrando em shadow roots abertos */
  const traverse = (root) => {
    root.querySelectorAll('[data-i18n-path]').forEach(applyElement);
    root.querySelectorAll('*').forEach((el) => {
      if (el.shadowRoot) traverse(el.shadowRoot);
    });
  };

  traverse(document);
};

/* exporta resolvePath para uso externo (ex: outros modulos) */
modInterface.resolvePath = resolver.resolvePath;

export const i18n = Object.freeze(modInterface);
