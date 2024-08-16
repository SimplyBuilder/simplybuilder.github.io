"use strict";

import homePTBR from "@stores/language/ptbr/home.js";
import canvasPTBR from "@stores/language/ptbr/canvas.js";
import docsPTBR from "@stores/language/ptbr/docs.js";

const strings = {
    ...homePTBR,
    ...canvasPTBR,
    ...docsPTBR
};

export const languagePtBR = Object.freeze(strings)
