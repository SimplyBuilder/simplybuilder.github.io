"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";


const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center",
        },
        children: [
            makeSimpleH2({
                text: "docs-section-basics-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),

            makeSimpleParagraph({
                text: "docs-section-basics-intro",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleH3({
                text: "docs-section-basics-type-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-type-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-element-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-element-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-attr-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-attr-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-dataset-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-dataset-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-event-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-event-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-shadow-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-shadow-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-text-html-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-text-html-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH3({
                text: "docs-section-basics-children-header",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-children-text",
                css: "block text-md font-sans py-2"
            }),

            makeSimpleH2({
                text: "docs-section-basics-example-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-section-basics-example-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `{
    type: "html",
    element: "button",
    attr: {
        class: "btn btn-primary"
    },
    text: "Click Me",
    event: {
        type: "click",
        action: "handleClick"
    }
}`
            })
        ]
    }
};

export const docsCoreConceptIntroTextStruct = Object.freeze(struct);