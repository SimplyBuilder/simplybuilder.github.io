"use strict";

import {language} from "@stores/language/main.js";

const makeItemDocMenu = (data = {}) => {
    const {key, anchor} = data;
    if (key && anchor) {
        return {
            element: "li",
            children: [
                {
                    element: "a",
                    attr: { href: anchor, class: "hover:bg-rose-700 p-1 rounded select-none" },
                    text: language.get(key)
                }
            ]
        }
    }
};

const headerStruct = () => {
    return [
        {
            element: "input",
            attr: { type: "checkbox", id:"docs-menu-toggle" },
            dataset: { state: "docs-menu-toggle" }
        },
        {
            element: "label",
            attr: {
                for: "docs-menu-toggle",
                class: "inline-flex flex-row gap-2 items-center text-sm font-semibold text-base cursor-pointer w-fit"
            },
            children: [
                {
                    type: "svg",
                    element: "svg",
                    attr: {
                        class: "w-6 pointer-events-none"
                    },
                    attrNS: {
                        fill: "currentColor",
                        viewBox: "0 0 448 512"
                    },
                    children: [
                        {
                            type: "svg",
                            element: "path",
                            attrNS: {
                                d: "M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                            }
                        }
                    ]
                },
                {
                    element: "span",
                    attr: {
                        class: "select-none"
                    },
                    text: language.get("docs-menu-header")
                }
            ]
            //    html: "☰ <span>documentação</span>"
        }
    ]
};
const itemStruct = () => {
    return {
        element: "div",
        attr: { class: "docs-items-menu" },
        children: [
            {
                element: "ul",
                attr: { class: "flex flex-wrap flex-col gap-2 list-none" },
                children: [
                    makeItemDocMenu({key: "docs-get-start-menu", anchor: "#/docs/get-start"}),
                    makeItemDocMenu({key: "docs-core-concepts-menu", anchor: "#/docs/core-concepts"}),
                    makeItemDocMenu({key: "docs-how-use-menu", anchor: "#/docs/how-use"}),
                ]
            }
        ]
    }
};

const struct = () => {
    return {
        element: "aside",
        attr: {
            class: "docs-aside rounded bg-sky-600 px-2 py-1 gap-3 uppercase text-sm font-mono transform transition duration-300"
        },
        children: [
            ...headerStruct(),
            itemStruct()
        ]
    }
};

export const sidebarStruct = Object.freeze(struct);
