"use strict";

import {language} from "@stores/language/main.js";

const fnMakeHeaderTextBlock = (langKey) => {
    let text;
    if(typeof langKey === "string") text = language.get(langKey.toString().toLowerCase());

    return {
        element: "p",
        attr: {
            class: "flex flex-col p-4 p-4 select-none w-full font-mono font-semibold tracking-wide uppercase text-xl text-center justify-center"
        },
        text
    };
};

export const makeHeaderTextBlock = Object.freeze(fnMakeHeaderTextBlock);