"use strict";

import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";
import {makeTextBlock} from "@components/render/utils/makeTextBlock.js";

const reason_text1 = () => makeTextBlock("home-reason-text1");
const reason_text2 = () => makeTextBlock("home-reason-text2");
const reason_text3 = () => makeTextBlock("home-reason-text3");
const reason_text4 = () => makeTextBlock("home-reason-text4");
const reason_text5 = () => makeTextBlock("home-reason-text5");
const reason_text6 = () => makeTextBlock("home-reason-text6");
const reason_text7 = () => makeTextBlock("home-reason-text7");

const reason_header = () => makeHeaderTextBlock('home-reason-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            reason_header(),
            reason_text1(), reason_text2(), reason_text3(), reason_text4(), reason_text5(), reason_text6(), reason_text7()
        ]
    }
};

export const reasonTextStruct = Object.freeze(struct);