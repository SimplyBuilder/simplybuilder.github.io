"use strict";

import {language} from "@stores/language/main.js";
import {svgElement} from "@components/render/svg/main.js";

const buttonSectionStruct = {
    element: "section",
    attr: {
        class: "inline-flex flex-row space-x-4 items-center h-full"
    },
    children: [
        svgElement.theme,
        svgElement.enFlag,
        svgElement.brFlag
    ]
};

const struct = () => {
    return {
        element: "nav",
        attr: {
            class: "flex items-center justify-center flex-row flex-wrap w-full border-b border-blue-600 p-4 shadow-md uppercase font-semibold font-mono tracking-wider"
        },
        children: [
            {
                element: "nav",
                attr: {
                    class: "inline-flex w-fit h-full space-x-2 items-center"
                },
                children: [
                    {
                        element: "a",
                        attr: {
                            class: "hover:bg-blue-700 hover:text-white px-3 py-2 rounded",
                            href: "./#!/home",
                            title: language.get("canvas-menu-home")
                        },
                        text: language.get("canvas-menu-home")
                    },
                    {
                        element: "a",
                        attr: {
                            class: "hover:bg-blue-700 hover:text-white px-3 py-2 rounded",
                            href: "./#!/docs",
                            title: language.get("canvas-menu-docs")
                        },
                        text: language.get("canvas-menu-docs")
                    },
                    buttonSectionStruct
                ]
            }
        ]
    }
};

export const topMenuStruct = Object.freeze(struct);