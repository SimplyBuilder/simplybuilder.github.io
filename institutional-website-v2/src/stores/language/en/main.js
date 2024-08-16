"use strict";

import homeEN from "@stores/language/en/home.js";
import canvasEN from "@stores/language/en/canvas.js";
import docsEN from "@stores/language/en/docs.js";

const strings = {
    ...homeEN,
    ...canvasEN,
    ...docsEN
};

export const languageEnUS = Object.freeze(strings)
