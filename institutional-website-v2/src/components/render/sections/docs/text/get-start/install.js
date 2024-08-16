"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center border-t border-yellow-500 py-4",
        },
        children: [
            makeSimpleH2({
                text: "docs-section-install-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-section-install-simple",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleParagraph({
                text: "docs-section-install-simple-pnpm",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            codeBlock({
                type: "bash",
                code: "pnpm add @jamilservices/sb-core-module"
            }),

            makeSimpleParagraph({
                text: "docs-section-install-granular",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleParagraph({
                text: "docs-section-install-granular-pnpm",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            codeBlock({
                type: "bash",
                code: "pnpm add @jamilservices/sb-core-event-module"
            }),
            codeBlock({
                type: "bash",
                code: "pnpm add @jamilservices/sb-core-dom-module"
            }),
        ]
    }
};



export const docsInstallTextStruct = Object.freeze(struct);