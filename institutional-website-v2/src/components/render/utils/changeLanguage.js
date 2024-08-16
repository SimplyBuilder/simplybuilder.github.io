"use strict";

import {language} from "@stores/language/main.js";

const fnChangeFlag = (e) => {
    try {
        const {dataset} = e.target;
        if(dataset?.lang) language.setLang(dataset.lang);
    } catch {}
};

export const changeFlag = Object.freeze(fnChangeFlag);