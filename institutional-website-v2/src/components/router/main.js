'use strict';

import { RouterModule } from '@jamilservices/sb-module-router';
import {language} from "@stores/language/main.js";
const routers = RouterModule.instance();

routers.register({
    id: "home",
    title: "SimplyBuilder - Home"
});

routers.register({
    id: "docs/get-start",
    title: "SimplyBuilder - "+ language.get("docs-get-start-menu")
});
routers.register({
    id: "docs/core-concepts",
    title: "SimplyBuilder - "+ language.get("docs-core-concepts-menu")
});
routers.register({
    id: "docs/how-use",
    title: "SimplyBuilder - "+ language.get("docs-how-use-menu")
});

routers.register({
    id: "docs",
    redirect: "docs/get-start"
});

routers.register({
    id: "404",
    title: "SimplyBuilder - Oops"
})

export default Object.freeze({});