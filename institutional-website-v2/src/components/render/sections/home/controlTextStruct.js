"use strict";

import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";
import {makeTextBlock} from "@components/render/utils/makeTextBlock.js";

const control_text1 = () => makeTextBlock("home-control-text1");
const control_text2 = () => makeTextBlock("home-control-text2");
const control_text3 = () => makeTextBlock("home-control-text3");
const control_text4 = () => makeTextBlock("home-control-text4");
const control_text5 = () => makeTextBlock("home-control-text5");

const control_header = () => makeHeaderTextBlock('home-control-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            control_header(),
            control_text1(), control_text2(), control_text3(), control_text4(), control_text5()
        ]
    }
};

export const controlTextStruct = Object.freeze(struct);