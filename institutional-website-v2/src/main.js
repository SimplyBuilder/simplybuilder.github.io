'use strict';

import {language} from "@stores/language/main.js";
language.start();
import "@styles/main.scss";
import "@components/render/main.js";
import "@stores/pageStore.js";
import "@components/router/main.js";

const getColorPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
};
if(getColorPreference() === 'dark') document.documentElement.classList.add("dark");

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const colorScheme = event.matches ? "dark" : "light";
    if(colorScheme === 'dark') {
        document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
});