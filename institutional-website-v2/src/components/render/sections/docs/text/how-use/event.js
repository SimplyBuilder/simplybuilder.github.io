"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";
import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center py-4",
        },
        children: [
            makeSimpleH2({
                text: "docs-how-use-event-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleH3({
                text: "docs-how-use-event-register",
                css: "block text-lg font-semibold font-mono uppercase pt-3"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-event-register-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `CoreModule.eventRegister("unique-event-id-here", (e) => { 
    console.log(e); 
});`
            }),

            makeSimpleH3({
                text: "docs-how-use-event-unregister",
                css: "block text-lg font-semibold font-mono uppercase"
            }),

            makeSimpleParagraph({
                text: "docs-how-use-event-unregister-text",
                css: "block text-md font-sans py-4"
            }),

            codeBlock({
                type: "javascript",
                code: `CoreModule.eventUnregister("unique-event-id-here");`
            }),
        ]
    }
};

export const docsHowUseEventTextStruct = Object.freeze(struct);