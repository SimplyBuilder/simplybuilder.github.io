"use strict";

import {language} from "@stores/language/main.js";

const sloganStruct = () => language.get("canvas-footer-slogan");

const struct = () => {
    return {
        element: "footer",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full items-center justify-center py-6 px-4 font-mono border-t border-blue-600"
        },
        children: [
            {
                element: "p",
                attr: {
                    class: "text-center text-sm md:text-base"
                },
                children: [
                    {
                        element: "span",
                        text: sloganStruct()
                    },
                    {
                        element: "span",
                        children: [
                            {
                                element: "a",
                                attr: {
                                    class: "text-rose-600 dark:text-rose-400 hover:underline font-mono font-semibold tracking-wider",
                                    href: "https://github.com/jamilservices",
                                    target: "_blank",
                                    rel: "noopener"
                                },
                                text: "JamilServices"
                            }
                        ]
                    }
                ]
            },
            {
                element: "div",
                attr: {
                    class: "mt-2 text-center"
                },
                children: [
                    {
                        element: "a",
                        attr: {
                            class: "text-rose-600 dark:text-rose-400 hover:underline font-mono font-semibold tracking-wider",
                            href: "https://github.com/orgs/SimplyBuilder/repositories",
                            target: "_blank",
                            rel: "noopener"
                        },
                        text: "GitHub:SimplyBuilder",
                    }
                ]
            }
        ]
    }
};

export const footerStruct = Object.freeze(struct);