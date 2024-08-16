'use strict';

import {language} from "@stores/language/main.js";
language.start();
import "@styles/main.scss";
import "@components/render/main.js";
import "@stores/pageStore.js";
import "@components/router/main.js";

/*import {CoreModule} from "@jamilservices/sb-core-module";
import {layoutStruct} from "@components/render/layout/main.js";

document.addEventListener("DOMContentLoaded", function() {
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: layoutStruct
    });
})*/