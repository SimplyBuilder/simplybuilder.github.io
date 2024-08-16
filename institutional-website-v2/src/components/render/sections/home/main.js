"use strict";

import {notifyTextStruct} from "@components/render/sections/home/notifyTextStruct.js";
import {controlTextStruct} from "@components/render/sections/home/controlTextStruct.js";
import {eventTextStruct} from "@components/render/sections/home/eventTextStruct.js";
import {objectTextStruct} from "@components/render/sections/home/objectTextStruct.js";
import {useTextStruct} from "@components/render/sections/home/useTextStruct.js";
import {reasonTextStruct} from "@components/render/sections/home/reasonTextStruct.js";

const struct = () => {
    return [
        reasonTextStruct(),
        useTextStruct(),
        objectTextStruct(),
        eventTextStruct(),
        controlTextStruct(),
        notifyTextStruct()
    ]
};

export const homeStruct = Object.freeze(struct);