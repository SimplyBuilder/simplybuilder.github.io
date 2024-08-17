"use strict";

import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center ",
        },
        children: [
            makeSimpleH2({
                text: "docs-chatgpt-header",
                css: "block text-2xl uppercase font-bold font-mono"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-text",
                css: "block text-md font-sans py-4"
            })
        ]
    };
};

export const docsChatGPTIntroTextStruct = Object.freeze(struct);