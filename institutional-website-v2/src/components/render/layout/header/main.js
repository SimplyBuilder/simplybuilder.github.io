"use strict";

import {svgElement} from "@components/render/svg/main.js";
import {language} from "@stores/language/main.js";
import {topMenuStruct} from "@components/render/layout/header/topmenu.js";

const logoContainerStruct = {
    element: "section",
    attr: {
        class: "inline-flex max-h-40 min-h-32 w-full items-center justify-center"
    },
    children: [
        svgElement.logo
    ]
};

const heroStruct = () => {
    return {
        element: "h2",
        attr: {
            class: "font-sans xl:text-xl md:text-md sm:text-sm w-3/5 text-center justify-center"
        },
        text: language.get("canvas-header-subtitle")
    };
};

const struct = () => {
    return {
        element: "header",
        attr: {
            class: "inline-flex flex-col h-fit w-full items-center justify-center"
        },
        children: [
            topMenuStruct(),
            logoContainerStruct,
            heroStruct()
        ]
    }
};

export const headerStruct = Object.freeze(struct);
