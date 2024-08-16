"use strict";

import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";
import {makeTextBlock} from "@components/render/utils/makeTextBlock.js";

const use_text1 = () => makeTextBlock('home-use-text1');
const use_text2 = () => makeTextBlock('home-use-text2');

const use_header = () => makeHeaderTextBlock('home-use-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            use_header(),
            use_text1(), use_text2()
        ]
    }
};

export const useTextStruct = Object.freeze(struct);