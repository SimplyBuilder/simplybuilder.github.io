"use strict";

import {codeBlock} from "@components/render/utils/codeBlock.js";
import {makeHeaderTextBlock} from "@components/render/utils/makeHeaderTextBlock.js";

const notify_text1 = () => codeBlock({
    type: "javascript",
    code: "import {NotifyModule} from '@jamilservices/sb-module-notify';\n" +
        "\n" +
        "const myEvents = NotifyModule.instance('event-name');\n" +
        "\n" +
        "myEvents.subscribe({\n" +
        "    id: 'subscribe-unique-id',\n" +
        "    fn: data => {\n" +
        "        console.log('subscribe-unique-id', data);\n" +
        "    }\n" +
        "});\n" +
        "\n"
});
const notify_header = () => makeHeaderTextBlock('home-notify-header');

const struct = () => {
    return {
        element: "article",
        attr: {
            class: "flex flex-row flex-wrap h-full w-full gap-2 justify-center content-start"
        },
        children: [
            notify_header(),
            notify_text1()
        ]
    }
};

export const notifyTextStruct = Object.freeze(struct);