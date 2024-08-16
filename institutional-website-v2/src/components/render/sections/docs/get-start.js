"use strict";

import {docsCreateTextStruct} from "@components/render/sections/docs/text/get-start/create.js";
import {docsInstallTextStruct} from "@components/render/sections/docs/text/get-start/install.js";
import {docsImportTextStruct} from "@components/render/sections/docs/text/get-start/import.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col min-h-12 w-full h-full",
        },
        children: [
            docsCreateTextStruct(),
            docsInstallTextStruct(),
            docsImportTextStruct()
        ]
    }
};

export const docsGetStartStruct = Object.freeze(struct);