"use strict";

const textStruct = {
    element: "p",
    attr: {
        class: "p-8"
    },
    text: "Error 404"
};
const linkStruct = {
    element: "p",
    attr: {
        class: "p-8"
    },
    children: [
        {
            element: "a",
            attr: {
                href: "/home"
            },
            text: "Retornar para a pagina inicial."
        }
    ]
};

const struct = {
    element: "article",
    attr: {
        class: "inline-flex flex-col grow w-full items-center justify-center text-2xl font-mono gap-2"
    },
    children:[
        textStruct,
        linkStruct
    ]
};

export const error404Struct = Object.freeze(struct);