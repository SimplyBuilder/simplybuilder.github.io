"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center border-t border-yellow-500 py-4",
        },
        children: [
            makeSimpleH2({
                text: "docs-section-import-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-section-import-intro",
                css: "block text-md font-sans py-4"
            }),

            makeSimpleH3({
                text: "docs-section-import-simple",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-import-simple-desc",
                css: "block text-md font-sans py-2"
            }),
            codeBlock({
                type: "javascript",
                code: "import { CoreModule } from '@jamilservices/sb-core-module';"
            }),

            makeSimpleH3({
                text: "docs-section-import-granular",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-import-granular-desc",
                css: "block text-md font-sans py-2"
            }),
            codeBlock({
                type: "javascript",
                code: "import { EventModule } from '@jamilservices/sb-core-event-module';"
            }),
            codeBlock({
                type: "javascript",
                code: "import { DomModule } from '@jamilservices/sb-core-dom-module';"
            }),

            makeSimpleH3({
                text: "docs-section-import-cdn",
                css: "block text-lg font-semibold font-mono uppercase"
            }),
            makeSimpleParagraph({
                text: "docs-section-import-cdn-desc",
                css: "block text-md font-sans py-2"
            }),
            codeBlock({
                type: "javascript",
                code: "import { [module] } from '[cdn url]'"
            }),
            codeBlock({
                type: "text",
                code: "https://cdn.skypack.dev/@jamilservices/sb-core-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://unpkg.com/@jamilservices/sb-core-module@latest/lib/main.min.js"
            }),

            codeBlock({
                type: "text",
                code: "https://cdn.skypack.dev/@jamilservices/sb-core-event-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-event-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://unpkg.com/@jamilservices/sb-core-event-module@latest/lib/main.min.js"
            }),

            codeBlock({
                type: "text",
                code: "https://cdn.skypack.dev/@jamilservices/sb-core-dom-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://cdn.jsdelivr.net/npm/@jamilservices/sb-core-dom-module@latest/lib/main.min.js"
            }),
            codeBlock({
                type: "text",
                code: "https://unpkg.com/@jamilservices/sb-core-dom-module@latest/lib/main.min.js"
            })
        ]
    }
};


export const docsImportTextStruct = Object.freeze(struct);