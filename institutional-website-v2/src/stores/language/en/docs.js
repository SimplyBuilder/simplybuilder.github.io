"use strict";

const strings = {
    "docs-menu-header": "Documentation",
    "docs-get-start-menu": "Get Started",
    "docs-core-concepts-menu": "core concepts",
    "docs-how-use-menu": "How use",

    "docs-section-use-pnpm": "Using pnpm:",
    "docs-section-use-npm": "Using npm:",
    "docs-section-use-yarn": "Using yarn:",

    "docs-section-create-intro-header": "Introduction to Create",
    "docs-section-create-intro-text": "By default, templates are created as a ViteJS project, due to the large number of people who are accustomed to and use ViteJS in their projects.",
    "docs-section-create-intro-vite": "However, you can also use SimplyBuilder directly in a static HTML project by importing from a CDN.",
    "docs-section-create-intro-cdn": "This allows you to integrate SimplyBuilder into your existing workflows without the need for a full ViteJS setup.",

    "docs-section-create-header": "Quick Start Commands for SimplyBuilder",
    "docs-section-create-text1": "To get started with SimplyBuilder, you can use one of the following commands to quickly set up your project. SimplyBuilder supports various package managers, so choose the one that best fits your workflow.",
    "docs-section-create-text2": "Each of these commands sets up a new SimplyBuilder project, allowing you to start building your UI components efficiently. Choose the command that aligns with your preferred package manager.",

    "docs-section-install-header": "Manual Installation",
    "docs-section-install-simple": "Simple installation (tested with: npm, pnpm, and yarn)",
    "docs-section-install-simple-pnpm": "Simple installation with pnpm:",
    "docs-section-install-granular": "Granular installation (tested with: npm, pnpm, and yarn)",
    "docs-section-install-granular-pnpm": "Granular installation with pnpm:",

    "docs-section-import-header": "Import",
    "docs-section-import-intro": "Here you'll find instructions on how to import SimplyBuilder modules into your project. Depending on your needs, you can choose between a simple import, granular import, or CDN import.",
    "docs-section-import-simple": "Simple Import",
    "docs-section-import-simple-desc": "For a direct and simple import of the core module, use the following code. This is ideal for projects that need the basic core module.",
    "docs-section-import-granular": "Granular Import",
    "docs-section-import-granular-desc": "If you need specific functionalities, you can import individual modules such as the event module or the DOM module. This allows for a more modular and efficient setup.",
    "docs-section-import-cdn": "CDN Import",
    "docs-section-import-cdn-desc": "For quick import without installation, you can use the provided CDN links. This is useful for quick testing or integrations that do not require local installation.",

    "docs-section-basics-header": "Basic Concepts of SimplyBuilder",
    "docs-section-basics-intro": "SimplyBuilder is a flexible framework for creating user interfaces. It uses a configuration object to define and structure your UI components. Here are the basic concepts you need to understand to get started with SimplyBuilder.",
    "docs-section-basics-type-header": "Element Type",
    "docs-section-basics-type-text": "The `type` attribute defines the type of element being created. It can be `html` for standard HTML elements or `svg` for SVG elements. The default is `html`, so you only need to specify it for SVG elements.",
    "docs-section-basics-element-header": "Element",
    "docs-section-basics-element-text": "The `element` property specifies the type of HTML or SVG element. This can be a tag name such as `div`, `span`, `svg`, `circle`, etc. It is a required field that defines the base element you are applying the configuration to.",
    "docs-section-basics-attr-header": "Attributes",
    "docs-section-basics-attr-text": "The `attr` property defines attributes for an HTML element, such as `class`, `id`, and other HTML-specific attributes. The `attrNS` property is used for SVG namespace attributes like `viewBox`, `cx`, `cy`, `r`, etc.",
    "docs-section-basics-dataset-header": "Dataset",
    "docs-section-basics-dataset-text": "The `dataset` property is used to define `data-*` attributes on an HTML element, which can be used to store additional data.",

    "docs-section-basics-event-header": "Events",
    "docs-section-basics-event-text": "The `event` configuration allows you to add event handlers to elements. You need to specify the type of event and the associated action.",
    "docs-section-basics-shadow-header": "Shadow DOM",
    "docs-section-basics-shadow-text": "To encapsulate the style and behavior of a component, you can use the `shadow` configuration. You can define it as an object with `mode` and optional styles, or simply as a mode value.",
    "docs-section-basics-text-html-header": "Text and HTML",
    "docs-section-basics-text-html-text": "The `text` property defines plain text to be displayed inside the element without HTML tags. The `html` property allows you to insert HTML code directly into the element.",
    "docs-section-basics-children-header": "Children",
    "docs-section-basics-children-text": "The `children` property is an array that allows you to include other elements as children of the current element, enabling nested UI structures.",
    "docs-section-basics-example-header": "Practical Example",
    "docs-section-basics-example-text": "Here is an example of how you can create a button component with SimplyBuilder:",

    "docs-how-use-header": "Rendering with SimplyBuilder",
    "docs-how-use-intro": "SimplyBuilder offers a powerful and flexible approach to creating and managing user interfaces. With it, you can register events, render structures, retrieve references, and remove elements efficiently. Here's how you can use these features:",
    "docs-how-use-event-header": "Events",
    "docs-how-use-event-register": "Registering Events",
    "docs-how-use-event-register-text": "Before rendering an element, you can register events to be bound during creation. For example:",
    "docs-how-use-event-unregister": "Removing Events",
    "docs-how-use-event-unregister-text": "If you need to remove an event, you can do so manually with the following command:",
    "docs-how-use-create": "Rendering Structures",
    "docs-how-use-create-text": "To render an element using SimplyBuilder, you need to provide a configuration object (struct) and a parent element where the component will be inserted:",
    "docs-how-use-get-element": "Retrieving References",
    "docs-how-use-get-element-text": "After rendering, you can retrieve a reference to an element using the dataset.state value associated with it:",
    "docs-how-use-remove-element": "Removing Elements",
    "docs-how-use-remove-element-text": "If you need to remove an element and all its associated event listeners, including its children, use:"
};

export default Object.freeze(strings)
