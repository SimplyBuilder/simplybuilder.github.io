"use strict";

import {sidebarStruct} from "@components/render/sections/docs/sidebar.js";
import {docsGetStartStruct} from "@components/render/sections/docs/get-start.js";
import {docsCoreConceptStruct} from "@components/render/sections/docs/core-concepts.js";
import {docsHowUseStruct} from "@components/render/sections/docs/how-use.js";
import {docsChatGPTStruct} from "@components/render/sections/docs/chatgpt.js";

const docSection = {
    "get-start": docsGetStartStruct,
    "core-concepts": docsCoreConceptStruct,
    "how-use": docsHowUseStruct,
    "chatgpt": docsChatGPTStruct
};

const docsViewStruct = (section) => {
    let schema = {
        element: "section",
        attr: {
            class: "flex flex-col flex-wrap grow p-2 pl-16",
        }
    };
    if(docSection[section]) schema['children'] = [docSection[section]()];

    return {
        element: "section",
        attr: {
            class: "relative flex flex-col grow min-h-fit overflow-auto will-change-scroll",
        },
        children: [
            sidebarStruct(),
            schema
        ]
    }
};

const struct = (section) => {
    return [docsViewStruct(section)]
}

export const docStruct = Object.freeze(struct);
