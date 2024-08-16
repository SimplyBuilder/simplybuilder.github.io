"use strict";

const struct = (children = []) => {
    const schema = {
        element: "main",
        attr: {
            class: "inline-flex flex-col grow w-full p-1"
        },
        dataset: {
            state: "view.main",
        }
    };
    if(Array.isArray(children) && children.length >= 1) {
        schema["children"] = children;
    } else {
        schema["text"] = "aguarde...";
    }
    return schema;
};

export const viewMainStruct = Object.freeze(struct);