'use strict';

import { NotifyModule } from '@jamilservices/sb-module-notify';
const storeEvents = NotifyModule.instance("page-store");
const routerWacth = NotifyModule.instance("router");

const store = {
    page: undefined,
    render: 'main'
};

const routerEvents = (data = {}) => {
    try {
        const {event, target} = data;
        const canonical = document.querySelector("link[rel='canonical']");
        if(canonical) {
            canonical.href = window.location.href;
        } else {
            const link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            link.setAttribute('href', window.location.href.replace("http:", "https:"));
            window.document.head.appendChild(link);
        }
        if (event === "router-update" && target) {
            if(store.render === 'main') store.render = "section";
            if(store.page !== target) {
                store.page = target;
                storeEvents.emit({
                    origin: 'page-store', render: data.target
                });
            }
        }
        if (event === "lang-update") {
            storeEvents.emit({
                origin: 'lang-store', render: store.page
            });
        }
    } catch (e) {
        console.error(e);
    }
}

routerWacth.subscribe({
    id: "store-watch",
    fn: routerEvents
});

export default Object.freeze({});