"use strict";

const fnCodeBlock = (data = {}) => {
    const {code, type} = data;
    if(code && type) {
        return {
            element: "pre",
            attr: {
                "data-no-dynamic-translation": true,
                class: "inline-flex flex-col mx-1 my-3 text-sm sm:text-base max-w-full bg-gray-600 dark:bg-gray-800 rounded-lg p-2 pl-3 notranslate"
            },
            children: [
                {
                    element: "header",
                    attr: {
                        "data-no-dynamic-translation": true,
                        class: "inline-flex text-yellow-500 border-b border-indigo-500 p-1 notranslate"
                    },
                    text: type.toString().toLowerCase()
                },
                {
                    element: "code",
                    attr: {
                        "data-no-dynamic-translation": true,
                        class: "inline-flex overscroll-auto focus:overscroll-contain overflow-auto text-left items-center space-x-4  text-white p-2 pl-3 notranslate"
                    },
                    text: code.toString()
                }
            ]
        }
    }
};

export const codeBlock = Object.freeze(fnCodeBlock);