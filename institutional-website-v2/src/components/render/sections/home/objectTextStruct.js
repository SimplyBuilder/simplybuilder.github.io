"use strict";

import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";
import {codeBlock} from "@components/render/utils/codeBlock.js";

const object_text1 = () => codeBlock({
    type: "javascript",
    code: "{\n" +
        "    element: 'div',\n" +
        "    attr: { class: 'example-class' },\n" +
        "    text: 'This is a dynamic element.'\n" +
        "};\n"
});

const object_header = () => makeHeaderTextBlock('home-object-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            object_header(),
            object_text1()
        ]
    }
};

export const objectTextStruct = Object.freeze(struct);