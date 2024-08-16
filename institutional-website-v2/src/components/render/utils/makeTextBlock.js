"use strict";

import {language} from "@stores/language/main.js";

const fnMakeTextBlock = (langKey) => {
    let text;
    if(typeof langKey === "string") text = language.get(langKey.toString().toLowerCase());

    return {
        element: "p",
        attr: {
            class: "inline-flex flex-col p-4 p-4 max-w-80 rounded select-none font-mono font-semibold tracking-wide uppercase text-xl text-center justify-center hover:bg-rose-600 hover:text-white bg-zinc-200 dark:bg-zinc-600"
        },
        text
    };
};

export const makeTextBlock = Object.freeze(fnMakeTextBlock);