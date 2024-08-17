"use strict";

const strings = {
    "docs-menu-header": "Documentação",
    "docs-get-start-menu": "Começar",
    "docs-core-concepts-menu": "conceitos básicos",
    "docs-how-use-menu": "Como Usar",
    "docs-chatgpt-menu": "ChatGPT",

    "docs-section-use-pnpm": "Usando pnpm:",
    "docs-section-use-npm": "Usando npm:",
    "docs-section-use-yarn": "Usando yarn:",

    "docs-section-create-intro-header": "Introdução ao Create",
    "docs-section-create-intro-text": "Por padrão, os templates são criados como um projeto ViteJS, devido ao grande número de pessoas acostumadas e utilizando o ViteJS em seus projetos.",
    "docs-section-create-intro-vite": "No entanto, você também pode usar o SimplyBuilder diretamente em um projeto HTML estático realizando a importação do CDN.",
    "docs-section-create-intro-cdn": "Isso permite integrar o SimplyBuilder em seus fluxos de trabalho existentes sem a necessidade de uma configuração completa do ViteJS.",

    "docs-section-create-header": "Comandos Rápidos para Iniciar com o SimplyBuilder",
    "docs-section-create-text1": "Para começar a usar o SimplyBuilder, você pode usar um dos seguintes comandos para configurar rapidamente o seu projeto. O SimplyBuilder é compatível com vários gerenciadores de pacotes, então escolha o que melhor se adapta ao seu fluxo de trabalho.",
    "docs-section-create-text2": "Cada um desses comandos configura um novo projeto SimplyBuilder, permitindo que você comece a construir seus componentes de UI de forma eficiente. Escolha o comando que se alinha com seu gerenciador de pacotes preferido.",

    "docs-section-install-header": "Instalação Manual",
    "docs-section-install-simple": "Instalação simples (testado com: npm, pnpm e yarn)",
    "docs-section-install-simple-pnpm": "Instalação simples com pnpm:",
    "docs-section-install-granular": "Instalação granular (testado com: npm, pnpm e yarn)",
    "docs-section-install-granular-pnpm": "Instalação granular com pnpm:",

    "docs-section-import-header": "Importação",
    "docs-section-import-intro": "Aqui você encontrará as instruções sobre como importar módulos SimplyBuilder em seu projeto. Dependendo das suas necessidades, você pode optar por uma importação simples, granular ou através de uma CDN.",
    "docs-section-import-simple": "Importação Simples",
    "docs-section-import-simple-desc": "Para uma importação direta e simples do módulo principal, utilize o seguinte código. Isso é ideal para projetos que precisam do módulo core básico.",
    "docs-section-import-granular": "Importação Granular",
    "docs-section-import-granular-desc": "Se você precisa de funcionalidades específicas, pode importar módulos individuais como o módulo de eventos ou o módulo DOM. Isso permite uma configuração mais modular e eficiente.",
    "docs-section-import-cdn": "Importação via CDN",
    "docs-section-import-cdn-desc": "Para uma importação rápida sem a necessidade de instalação, você pode usar os links CDN fornecidos. Isso é útil para testes rápidos ou integrações que não precisam de instalação local.",

    "docs-section-basics-header": "Conceitos Básicos do SimplyBuilder",
    "docs-section-basics-intro": "O SimplyBuilder é um framework flexível para criar interfaces de usuário. Ele usa um objeto de configuração para definir e estruturar seus componentes de UI. Aqui estão os conceitos básicos que você precisa entender para começar a usar o SimplyBuilder.",
    "docs-section-basics-type-header": "Tipo de Elemento",
    "docs-section-basics-type-text": "O atributo `type` define o tipo de elemento que está sendo criado. Pode ser `html` para elementos HTML ou `svg` para elementos SVG. O padrão é `html`, portanto, você só precisa especificar para elementos SVG.",
    "docs-section-basics-element-header": "Elemento",
    "docs-section-basics-element-text": "A propriedade `element` especifica o tipo de elemento HTML ou SVG. Pode ser um nome de tag como `div`, `span`, `svg`, `circle`, etc. É um campo obrigatório que define o elemento base ao qual você está aplicando a configuração.",
    "docs-section-basics-attr-header": "Atributos",
    "docs-section-basics-attr-text": "A propriedade `attr` define atributos para um elemento HTML, como `class`, `id` e outros atributos específicos do HTML. A propriedade `attrNS` é usada para atributos de namespace SVG como `viewBox`, `cx`, `cy`, `r`, etc.",
    "docs-section-basics-dataset-header": "Dataset",
    "docs-section-basics-dataset-text": "A propriedade `dataset` é usada para definir atributos `data-*` em um elemento HTML, que podem ser usados para armazenar dados adicionais.",
    "docs-section-basics-event-header": "Eventos",
    "docs-section-basics-event-text": "A configuração `event` permite adicionar manipuladores de eventos aos elementos. Você precisa especificar o tipo de evento e a ação associada.",
    "docs-section-basics-shadow-header": "Shadow DOM",
    "docs-section-basics-shadow-text": "Para encapsular o estilo e o comportamento de um componente, você pode usar a configuração `shadow`. Você pode defini-la como um objeto com `mode` e estilos opcionais, ou simplesmente como um valor de modo.",
    "docs-section-basics-text-html-header": "Texto e HTML",
    "docs-section-basics-text-html-text": "A propriedade `text` define texto simples a ser exibido dentro do elemento sem tags HTML. A propriedade `html` permite inserir código HTML diretamente no elemento.",
    "docs-section-basics-children-header": "Filhos",
    "docs-section-basics-children-text": "A propriedade `children` é um array que permite incluir outros elementos como filhos do elemento atual, possibilitando estruturas de UI aninhadas.",
    "docs-section-basics-example-header": "Exemplo Prático",
    "docs-section-basics-example-text": "Aqui está um exemplo de como você pode criar um componente de botão com o SimplyBuilder:",

    "docs-how-use-header": "Como Renderizar com SimplyBuilder",
    "docs-how-use-intro": "O SimplyBuilder oferece uma abordagem poderosa e flexível para criar e gerenciar interfaces de usuário. Com ele, você pode registrar eventos, renderizar estruturas, recuperar referências e remover elementos de maneira eficiente. Veja como você pode usar essas funcionalidades:",
    "docs-how-use-event-header": "Eventos",
    "docs-how-use-event-register": "Registrando Eventos",
    "docs-how-use-event-register-text": "Antes de renderizar um elemento, você pode registrar eventos para que eles possam ser vinculados durante a criação. Por exemplo:",
    "docs-how-use-event-unregister": "Removendo Eventos",
    "docs-how-use-event-unregister-text": "Se precisar remover um evento, você pode fazer isso manualmente com o seguinte comando:",
    "docs-how-use-create": "Renderizando Estruturas",
    "docs-how-use-create-text": "Para renderizar um elemento usando SimplyBuilder, você deve fornecer um objeto de configuração (struct) e um elemento pai onde o componente será inserido:",
    "docs-how-use-get-element": "Recuperando Referências",
    "docs-how-use-get-element-text": "Após a renderização, você pode recuperar uma referência a um elemento usando o valor do dataset.state associado:",
    "docs-how-use-remove-element": "Removendo Elementos",
    "docs-how-use-remove-element-text": "Se você precisar remover um elemento e todos os seus ouvintes de eventos associados, incluindo seus filhos, use:",

    "docs-chatgpt-header": "Crie Objetos SimplyBuilder com o ChatGPT através de prompts",
    "docs-chatgpt-text": "Utilize o ChatGPT para gerar estruturas SimplyBuilder de maneira eficiente e fácil.",
    "docs-chatpgt-example-header": "Exemplo de treinamento inicial para ChatGPT:",

    "docs-chatgpt-example-text": "Vou lhe fornecer uma breve visão geral do objeto estrutural SimplyBuilder, um framework para criar UIs. Quero que você me forneça estruturas SimplyBuilder de acordo com minha solicitação, sempre usando o SimplyBuilder Object.",
    "docs-chatgpt-example-intro": "Exemplo:",
    "docs-chatgpt-example-request-header": "Solicitação:",
    "docs-chatgpt-example-request-text": "Como posso criar um botão simples usando o SimplyBuilder?",
    "docs-chatgpt-example-response-header": "Resposta:",
    "docs-chatgpt-conclusion": "Agora me responda o que compreendeu sobre o Object SimplyBuilder, e se esta pronto para criar estruturas SimplyBuilder.",
    "docs-chatgpt-example-conclusion": "Verifique a resposta do chatGPT e confirme se ele entendeu corretamente as instruções, então apenas solicite elementos, por exemplo: 'crie um \"footer\" para mim, usando simplybuilder e use classes tailmindcss para estilização'."

};

export default Object.freeze(strings)
