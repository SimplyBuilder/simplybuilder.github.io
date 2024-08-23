"use strict";

const svgStruct = {
    type: "svg",
    element: "svg",
    attr: {
        class: "w-6 h-6 bg-white rounded-full pointer-events-none",
    },
    attrNS: {
        viewBox: "0 0 24 24"
    },
    children: [
        {
            type: "svg",
            element: "path",
            attr: {
                class: "text-neutral-800"
            },
            attrNS: {
                fill: "currentColor",
                "fill-rule": "nonzero",
                d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 1 1 0 17Z"
            }
        }
    ]
};

const struct = {
    element: "span",
    attr: {
        class: "inline-block cursor-pointer w-fit h-fit",
        title: "dark/light mode"
    },
    event: {
        type: "click",
        action: "selector-change.theme"
    },
    children: [
        svgStruct
    ]
};

export const themeSelectorSvgStruct = Object.freeze(struct);