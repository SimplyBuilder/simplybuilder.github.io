"use strict";

const svgStruct = {
    type: "svg",
    element: "svg",
    attr: {
        class: "w-6 h-6 text-lime-600 bg-lime-600 rounded-full pointer-events-none",
    },
    attrNS: {
        viewBox: "0 0 512 512"
    },
    children: [
        {
            type: "svg",
            element: "cicle",
            attrNS: {
                cx: "256", cy: "256", r: "256", fill: "currentColor"
            }
        },
        {
            type: "svg",
            element: "path",
            attr: {
                class: "text-yellow-300"
            },
            attrNS: {
                fill: "currentColor",
                d: "M256 100.174 467.478 256 256 411.826 44.522 256z"
            }
        },
        {
            type: "svg",
            element: "cicle",
            attr: {
                class: "text-zinc-100"
            },
            attrNS: {
                cx: "256", cy: "256", r: "89.043", fill: "currentColor"
            }
        },
        {
            type: "svg",
            element: "g",
            attr: {
                class: "text-sky-700"
            },
            attrNS: {
                fill: "currentColor"
            },
            children: [
                {
                    type: "svg",
                    element: "path",
                    attrNS: {
                        d: "M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 0 0 1.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0 1 37.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
                    }
                }
            ]
        },
    ]
};

const struct = {
    element: "span",
    attr: {
        class: "inline-block cursor-pointer w-fit h-fit",
        title: "pt-BR"
    },
    dataset: {
        lang: "pt-br"
    },
    event: {
        type: "click",
        action: "flag-change.language"
    },
    children: [
        svgStruct
    ]
};

export const svgBrazilFlagStruct = Object.freeze(struct);