"use strict";

import {docsCoreConceptIntroTextStruct} from "@components/render/sections/docs/text/core-concepts/intro.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col min-h-12 w-full h-full",
        },
        children: [
            docsCoreConceptIntroTextStruct()
        ]
    }
};

export const docsCoreConceptStruct = Object.freeze(struct);