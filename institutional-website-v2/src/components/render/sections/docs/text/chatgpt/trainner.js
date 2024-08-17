"use strict";

import {makeSimpleH2} from "@components/render/utils/makeSimpleH2.js";
import {makeSimpleParagraph} from "@components/render/utils/makeSimpleParagraph.js";
import {makeSimpleH3} from "@components/render/utils/makeSimpleH3.js";
import {codeBlock} from "@components/render/utils/codeBlock.js";

const struct = () => {
    return {
        element: "section",
        attr: {
            class: "inline-flex flex-col flex-wrap w-full justify-center",
        },
        children: [
            makeSimpleH3({
                text: "docs-chatpgt-example-header",
                css: "block text-lg font-semibold font-mono uppercase border-b border-yellow-500 pb-3"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-text",
                css: "block text-md font-sans py-4"
            }),
            codeBlock({
                type: "markdown",
                code: `~~~javascript
{
  type: "html", // svg or html. by default it assumes html. (optional)
  element: undefined, // any html or svg element. (required)
  attr: {}, // any html element attribute. (optional)
  attrNS: {}, // any SVG namespace attribute. (optional)
  dataset: {  // any dataset attribute. (optional)
    state: undefined  // unique identification name for retrieval or reference. (optional)
  },
  event: { // reference object for events. (optional)
    type: undefined, // any event supported by javascript.
    action: undefined // unique identification node for event reference. (requires event registration with the same name)
  },
  shadow: { // object for creating ShadowRoot. (optional)
    mode: undefined, // 'open' or 'closed'. (required for shadowRoot, and requires dataset.state).
    styles: undefined, // isolated css styles for ShadowRoot. (optional)
  },
  shadow: undefined, // if styles are not needed, the 'mode' value can be provided directly instead of the object. (optional)
  text: undefined, // simple text with no HTML elements. (optional)
  html: undefined, // html code for direct insertion within the element. (optional)
  children: [] // inclusion of child elements within the current element. (optional)
}
~~~`
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-intro",
                css: "block text-md font-sans py-4"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-request-header",
                css: "block text-md font-sans pt-4"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-request-text",
                css: "block text-md font-sans"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-response-header",
                css: "block text-md font-sans pt-4"
            }),
            codeBlock({
                type: "markdown",
                code: `~~~javascript
{
  element: "button",
  attr: {
    type: "button"
  },
  text: "Click Here!"
}
~~~`
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-conclusion",
                css: "block text-md font-sans border-b border-yellow-500 py-4"
            }),
            makeSimpleParagraph({
                text: "docs-chatgpt-example-conclusion",
                css: "block text-md font-sans py-4"
            }),
        ]
    };
};

export const docsChatGPTTraiinerTextStruct = Object.freeze(struct);