"use strict";

import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";
import {codeBlock} from "@components/render/utils/codeBlock.js";

const event_text1 = () => codeBlock({
    type: "javascript",
    code: "CoreModule.eventRegister({\n" +
        "    name: 'callback.registered',\n" +
        "    fn: (e) => {\n" +
        "        console.log('callback.registered', e);\n" +
        "    }\n" +
        "});\n" +
        "\n" +
        "const struct = {\n" +
        "    element: 'div',\n" +
        "    event: {\n" +
        "        type: 'click',\n" +
        "        action: 'callback.registered'\n" +
        "    },\n" +
        "    text: 'This is a dynamic element with event bound during element creation.'\n" +
        "};\n"
});
const event_header = () => makeHeaderTextBlock('home-event-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            event_header(),
            event_text1()
        ]
    }
};

export const eventTextStruct = Object.freeze(struct);