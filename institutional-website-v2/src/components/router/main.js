'use strict';

import { RouterModule } from '@jamilservices/sb-module-router';
import {language} from "@stores/language/main.js";
const routers = RouterModule.instance();

const title_default = "SimplyBuilder UI Framework -";

routers.register({
    id: "home",
    title: title_default +" Home"
});

routers.register({
    id: "docs/get-start",
    title: title_default +" "+ language.get("docs-get-start-menu")
});
routers.register({
    id: "docs/core-concepts",
    title: title_default +" "+ language.get("docs-core-concepts-menu")
});
routers.register({
    id: "docs/how-use",
    title: title_default +" "+ language.get("docs-how-use-menu")
});
routers.register({
    id: "docs/chatgpt",
    title: title_default +" "+ language.get("docs-chatgpt-menu")
});

routers.register({
    id: "docs",
    redirect: "docs/get-start"
});

routers.register({
    id: "404",
    title: title_default +" Oops"
});

export default Object.freeze({});