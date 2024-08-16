"use strict";

import {docsHowUseEventTextStruct} from "@components/render/sections/docs/text/how-use/event.js";
import {docsHowUseRenderTextStruct} from "@components/render/sections/docs/text/how-use/render.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col min-h-12 w-full h-full",
        },
        children: [
            docsHowUseEventTextStruct(),
            docsHowUseRenderTextStruct()
        ]
    }
};

export const docsHowUseStruct = Object.freeze(struct);