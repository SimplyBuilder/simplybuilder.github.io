/* regex para detectar placeholders: $t:caminho (texto) ou $th:caminho (html) */
const PLACEHOLDER_RE = /^\$(t|th):(.+)/;

const modPrivate = Object.create(null);

/* extrai o placeholder de uma string: retorna { isHtml, path, value } ou null */
modPrivate.resolvePlaceholder = (val, translations) => {
  const m = typeof val === 'string' && PLACEHOLDER_RE.exec(val);
  if (!m) return null;
  return {
    isHtml: m[1] === 'th',
    path: m[2],
    value: modInterface.resolvePath(translations, m[2])
  };
};

/* guarda no contexto se o placeholder é de texto ou html (para registrar no stateMap) */
modPrivate.recordPlaceholder = (key, placeholder, ctx) => {
  if ((key === 'text' || key === 'html') && placeholder) {
    ctx.placeholderPath = placeholder.path;
    ctx.placeholderIsHtml = placeholder.isHtml;
  }
};

/* aplica o valor traduzido no clone, registra no contexto e marca dataset para update futuro */
modPrivate.applyPlaceholder = (key, placeholder, clone, ctx) => {
  clone[key] = placeholder.value;
  if (key === 'text' || key === 'html') {
    clone.dataset = clone.dataset || {};
    clone.dataset.i18nPath = placeholder.path;
    if (placeholder.isHtml) clone.dataset.i18nType = 'html';
  }
  modPrivate.recordPlaceholder(key, placeholder, ctx);
};

/* atribui um filho resolvido ao clone */
modPrivate.applyChild = (key, resolved, clone) => {
  clone[key] = resolved;
};

/* registra o par stateKey → { path, isHtml } no stateMap para updates futuros */
modPrivate.registerState = (node, ctx, stateMap) => {
  if (ctx.placeholderPath && node.dataset?.state && !stateMap.has(node.dataset.state)) {
    stateMap.set(node.dataset.state, {
      path: ctx.placeholderPath,
      isHtml: ctx.placeholderIsHtml
    });
  }
};

/* percorre um array resolvendo cada item, retorna copia apenas se houver mudancas */
modPrivate.resolveArray = (arr, translations, stateMap) => {
  let result = null;
  for (let i = 0; i < arr.length; i++) {
    const resolved = modInterface.resolveNode(arr[i], translations, stateMap);
    if (resolved !== arr[i]) {
      if (!result) result = arr.slice();
      result[i] = resolved;
    }
  }
  return result || arr;
};

/* resolve um filho objeto/array, retorna null se inalterado */
modPrivate.resolveChild = (node, translations, stateMap) => {
  const resolved = modInterface.resolveNode(node, translations, stateMap);
  return resolved !== node ? resolved : null;
};

const modInterface = Object.create(null);

/* resolve um caminho pontilhado (ex: "hero.title") em um objeto de traducoes */
modInterface.resolvePath = (obj, path) => {
  return path.split('.').reduce((o, p) => o?.[p], obj) ?? '';
};

/* percorre um struct recursivamente resolvendo placeholders e montando o stateMap */
modInterface.resolveNode = (node, translations, stateMap) => {
  if (typeof node !== 'object' || node === null) return node;
  if (Array.isArray(node)) return modPrivate.resolveArray(node, translations, stateMap);

  let clone = null;
  const ctx = { placeholderPath: null, placeholderIsHtml: false };

  for (const [key, val] of Object.entries(node)) {
    if (typeof val === 'string') {
      const placeholder = val[0] === '$' ? modPrivate.resolvePlaceholder(val, translations) : null;
      if (placeholder) {
        clone = clone || { ...node };
        modPrivate.applyPlaceholder(key, placeholder, clone, ctx);
      }
    } else if (typeof val === 'object' && val !== null) {
      const resolved = modPrivate.resolveChild(val, translations, stateMap);
      if (resolved) {
        clone = clone || { ...node };
        modPrivate.applyChild(key, resolved, clone);
      }
    }
  }

  if (clone) {
    modPrivate.registerState(clone, ctx, stateMap);
    return clone;
  }

  return node;
};

export const resolver = Object.freeze(modInterface);
