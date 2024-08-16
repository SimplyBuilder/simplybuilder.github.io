"use strict";

import {language} from "@stores/language/main.js";

const fnMakeSimpleH3 = (data= {}) => {
    const {text, css} = data;
    const schema = {
        element: "h3",
        attr: {}
    };
    if(css) schema.attr["class"] = css;
    if(text) schema["text"] = language.get(text.toString().toLowerCase());
    return schema;
};

export const makeSimpleH3 = Object.freeze(fnMakeSimpleH3);