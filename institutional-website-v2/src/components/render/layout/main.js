"use strict";

import {headerStruct} from "@components/render/layout/header/main.js";
import {footerStruct} from "@components/render/layout/footer/main.js";
import {canvasAndSections} from "@components/render/sections/main.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "flex flex-col flex-nowrap min-w-96 overflow-auto grow items-center justify-start gap-2"
        },
        dataset: {
            state: "canvas"
        },
        children: [
            headerStruct(),
            {
                element: "section",
                attr: {
                    class: "inline-flex flex-col max-w-screen-xl grow w-full"
                },
                dataset: {
                    state: "main.canvas"
                },
                children: [canvasAndSections.canvas]
            },
            footerStruct()
        ]
    };
};

export const layoutStruct = Object.freeze(struct)