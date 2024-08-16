"use strict";

import {language} from "@stores/language/main.js";

const fnMakeSimpleH2 = (data= {}) => {
    const {text, css} = data;
    const schema = {
        element: "h2",
        attr: {}
    };
    if(css) schema.attr["class"] = css;
    if(text) schema["text"] = language.get(text.toString().toLowerCase());
    return schema;
};

export const makeSimpleH2 = Object.freeze(fnMakeSimpleH2);