const modInterface = Object.create(null);

/* renderiza uma pagina: remove elementos antigos com state e cria os novos no parent */
modInterface.page = ({ CoreModule, parent, struct }) => {
  const previous = CoreModule.getElementFromStore("main.view");

  if(previous) CoreModule.removeElement(previous);

  const schema = {
    element: "div",
    dataset: {state: "main.view"},
    children: []
  };

  if (Array.isArray(struct)) {
    schema.children = struct;
  } else schema.children = [struct];

  CoreModule.createFromStruct({ parent, struct: schema });
};

/* limpa o parent sem cleanup de eventos (usado para fallback de erro) */
modInterface.clear = ({ parent }) => {
  parent.innerHTML = '';
};

export const render = Object.freeze(modInterface);
