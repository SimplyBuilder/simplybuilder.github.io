"use strict";


import {docsChatGPTIntroTextStruct} from "@components/render/sections/docs/text/chatgpt/intro.js";
import {docsChatGPTTraiinerTextStruct} from "@components/render/sections/docs/text/chatgpt/trainner.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col min-h-12 w-full h-full",
        },
        children: [
            docsChatGPTIntroTextStruct(),
            docsChatGPTTraiinerTextStruct()
        ]
    };
};

export const docsChatGPTStruct = Object.freeze(struct);