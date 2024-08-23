"use strict";

import {logoSvgStruct} from "@components/render/svg/logo.js";
import {themeSelectorSvgStruct} from "@components/render/svg/themeSelctor.js";
import {svgBrazilFlagStruct} from "@components/render/svg/svgBrazilFlag.js";
import {svgEUAFlagStruct} from "@components/render/svg/svgEUAFlag.js";

export const svgElement = Object.freeze({
    logo: logoSvgStruct,
    theme: themeSelectorSvgStruct,
    brFlag: svgBrazilFlagStruct,
    enFlag: svgEUAFlagStruct
})