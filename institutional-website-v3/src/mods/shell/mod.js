import headerData from './data/header.json';
import footerData from './data/footer.json';

const modInterface = Object.create(null);

/* renderiza header + main + footer no DOM, registra states no CoreModule */
modInterface.render = ({ CoreModule, i18n }) => {
  const rootContainer = document.createElement('section');
  rootContainer.setAttribute('class', 'useView');
  document.body.insertBefore(rootContainer, document.body.firstChild);

  const headerResolved = i18n.resolveStruct(headerData);
  i18n.adoptStateMap(headerResolved.stateMap);
  CoreModule.createFromStruct({
    parent: rootContainer,
    struct: headerResolved.resolved
  });

  CoreModule.createFromStruct({
    parent: rootContainer,
    struct: {
      element: 'main',
      dataset: { state: 'mainContent' }
    }
  });

  const footerResolved = i18n.resolveStruct(footerData);
  i18n.adoptStateMap(footerResolved.stateMap);
  CoreModule.createFromStruct({
    parent: rootContainer,
    struct: footerResolved.resolved
  });
};

export const shell = Object.freeze(modInterface);
