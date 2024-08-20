"use strict";

import {languagePtBR} from "@stores/language/ptbr/main.js";
import {languageEnUS} from "@stores/language/en/main.js";
import {NotifyModule} from "@jamilservices/sb-module-notify";
const routerWacth = NotifyModule.instance("router");

const types = {
    'pt-br': languagePtBR,
    'pt': languagePtBR,
    'en-us': languageEnUS,
    'en': languageEnUS
};
const store = {
    //language: "en"
    language: "pt-br"
};

const getString = (key) => {
    if(key && types[store.language]) return types[store.language][key];
};

const getLanguage = () => {
    return store.language;
};

const setLanguage = (key) => {
    if(key && types[key]) {
        store.language = key.toString();
        if(window.document.documentElement.lang !== store.language) window.document.documentElement.lang = store.language;
        routerWacth.emit({
            event: "lang-update"
        });
    }
};

const start = () => {
    if(window.document.documentElement.lang !== store.language) setLanguage(window.document.documentElement.lang);
};

export const language = Object.freeze({
    get: getString,
    setLang: setLanguage,
    getLang: getLanguage,
    start,
});