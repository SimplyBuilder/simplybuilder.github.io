"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";


const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center py-4",
        },
        children: [
            makeSimpleH2({
                text: "docs-section-create-intro-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-section-create-intro-text",
                css: "block text-md font-sans"
            }),
            makeSimpleParagraph({
                text: "docs-section-create-intro-vite",
                css: "block text-md font-sans"
            }),
            makeSimpleParagraph({
                text: "docs-section-create-intro-cdn",
                css: "block text-md font-sans pb-4"
            }),

            makeSimpleH2({
                text: "docs-section-create-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-section-create-text1",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleH3({
                text: "docs-section-use-pnpm",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            codeBlock({
                type: "bash",
                code: "pnpm create simplybuilder"
            }),

            makeSimpleH3({
                text: "docs-section-use-npm",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            codeBlock({
                type: "bash",
                code: "npm create simplybuilder"
            }),

            makeSimpleH3({
                text: "docs-section-use-yarn",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            codeBlock({
                type: "bash",
                code: "yarn create simplybuilder"
            }),

            makeSimpleParagraph({
                text: "docs-section-create-text2",
                css: "block text-md font-sans py-4"
            }),
        ]
    }
};

export const docsCreateTextStruct = Object.freeze(struct);