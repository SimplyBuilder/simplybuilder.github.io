"use strict";

import {language} from "@stores/language/main.js";

const fnMakeSimpleParagraph = (data= {}) => {
    const {text, css} = data;
    const schema = {
        element: "p",
        attr: {}
    };
    if(css) schema.attr["class"] = css;
    if(text) schema["text"] = language.get(text.toString().toLowerCase());
    return schema;
};

export const makeSimpleParagraph = Object.freeze(fnMakeSimpleParagraph);