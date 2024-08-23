"use strict";

import {CoreModule} from '@jamilservices/sb-core-module';
import {NotifyModule} from '@jamilservices/sb-module-notify';

import {canvasAndSections} from "@components/render/sections/main.js";
import {layoutStruct} from "@components/render/layout/main.js";
import {changeFlag} from "@components/render/utils/changeLanguage.js";

const storeEvents = NotifyModule.instance("page-store");

const renderSection = (section = {}) => {
    const pages = canvasAndSections.sections;
    const parent = CoreModule.getElementFromStore("main.canvas");
    /**
     * @type {HTMLElement}
     */
    const viewMain = CoreModule.getElementFromStore("view.main");
    if (viewMain) {
        /**
         * remove elements and events recursively
         */
        CoreModule.removeElement(viewMain);
    }
    if (parent && pages[section]) {
        const schema = {
            parent,
            struct: pages[section]()
        };
        CoreModule.createFromStruct(schema);
    }
};
const renderCanvas = (section = {}) => {
    CoreModule.createFromStruct({
        parent: window.document.body,
        struct: layoutStruct()
    });
    renderSection(section);
};
const renderPage = (section) => {
    /**
     * @type {HTMLElement}
     */
    const parent = CoreModule.getElementFromStore("main.canvas");
    if (parent) {
        renderSection(section);
    } else renderCanvas(section);
};
const refreshPage = (section) => {
    /**
     * @type {HTMLElement}
     */
    const parent = CoreModule.getElementFromStore("canvas");
    if (parent) CoreModule.removeElement(parent);
    renderCanvas(section);
};

storeEvents.subscribe({
    id: "render-watch",
    fn: data => {
        const {origin, render} = data;
        if (origin === "page-store") return renderPage(render);
        if (origin === "lang-store") return refreshPage(render);
    }
});

const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
};

CoreModule.eventRegister("flag-change.language", changeFlag);
CoreModule.eventRegister("selector-change.theme", changeTheme);

export default Object.freeze({});