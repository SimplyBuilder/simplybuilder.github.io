"use strict";

import {viewMainStruct} from "@components/render/layout/main/main.js";
import {homeStruct} from "@components/render/sections/home/main.js";
import {error404Struct} from "@components/render/sections/error404.js";
import {docStruct} from "@components/render/sections/docs/main.js";


const pageSections = {
    home: () => viewMainStruct(homeStruct()),
    "docs/get-start": () =>  viewMainStruct(docStruct("get-start")),
    "docs/core-concepts": () =>  viewMainStruct(docStruct("core-concepts")),
    "docs/how-use": () =>  viewMainStruct(docStruct("how-use")),
    '404': () =>  viewMainStruct([error404Struct])
};

export const canvasAndSections = Object.freeze({
    canvas: viewMainStruct([]),
    sections: pageSections
});