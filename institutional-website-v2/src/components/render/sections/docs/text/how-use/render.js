"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center border-t border-yellow-500 py-4",
        },
        children: [
            makeSimpleH2({
                text: "docs-how-use-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-intro",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleH3({
                text: "docs-how-use-create",
                css: "block text-lg font-semibold font-mono uppercase"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-create-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `const struct { 
    element: "h2", 
    text: "Hello World",
    attr: {
      class: "example",
      style: "cursor: pointer"
    },
    dataset: {
      state: "unique-dataset-state-id-here"
    },
    event: {
      type: "click",
      action: "unique-event-id-here"
    }
};
CoreModule.createFromStruct({
    parent: window.document.body, // parent object, where the structure will be created.
    struct // Object SimplyBuilder
});`
            }),

            makeSimpleH3({
                text: "docs-how-use-get-element",
                css: "block text-lg font-semibold font-mono uppercase"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-get-element-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `const elementExample = CoreModule.getElementFromStore("unique-dataset-state-id-here");`
            }),

            makeSimpleH3({
                text: "docs-how-use-remove-element",
                css: "block text-lg font-semibold font-mono uppercase"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-remove-element-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `CoreModule.removeElement(elementExample);`
            })
        ]
    }
};

export const docsHowUseRenderTextStruct = Object.freeze(struct);