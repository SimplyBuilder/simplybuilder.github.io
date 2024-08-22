"use strict";

import {language} from "@stores/language/main.js";



const svgBrazilFlagStruct = {
    element: "span",
    attr: {
        class: "inline-block cursor-pointer w-fit h-fit"
    },
    dataset: {
        lang: "pt-br"
    },
    event: {
        type: "click",
        action: "flag-change.language"
    },
    children: [
        {
            type: "svg",
            element: "svg",
            attr: {
                class: "w-6 h-6 text-lime-600 bg-lime-600 rounded-full pointer-events-none",
            },
            attrNS: {
                viewBox: "0 0 512 512"
            },
            children: [
                {
                    type: "svg",
                    element: "cicle",
                    attrNS: {
                        cx: "256", cy: "256", r: "256", fill: "currentColor"
                    }
                },
                {
                    type: "svg",
                    element: "path",
                    attr: {
                        class: "text-yellow-300"
                    },
                    attrNS: {
                        fill: "currentColor",
                        d: "M256 100.174 467.478 256 256 411.826 44.522 256z"
                    }
                },
                {
                    type: "svg",
                    element: "cicle",
                    attr: {
                        class: "text-zinc-100"
                    },
                    attrNS: {
                        cx: "256", cy: "256", r: "89.043", fill: "currentColor"
                    }
                },
                {
                    type: "svg",
                    element: "g",
                    attr: {
                        class: "text-sky-700"
                    },
                    attrNS: {
                        fill: "currentColor"
                    },
                    children: [
                        {
                            type: "svg",
                            element: "path",
                            attrNS: {
                                d: "M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641zM343.393 273.06a89.45 89.45 0 0 0 1.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0 1 37.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
                            }
                        }
                    ]
                },
            ]
        }
    ]
};
const svgEUAFlagStruct = {
    element: "span",
    attr: {
        class: "inline-block cursor-pointer w-fit h-fit"
    },
    dataset: {
        lang: "en"
    },
    event: {
        type: "click",
        action: "flag-change.language"
    },
    children: [
        {
            type: "svg",
            element: "svg",
            attr: {
                class: "w-6 h-6 bg-white rounded-full pointer-events-none",
            },
            attrNS: {
                viewBox: "0 0 512 512"
            },
            children: [
                {
                    type: "svg",
                    element: "cicle",
                    attr: {
                        style: "color: #f0f0f0"
                    },
                    attrNS: {
                        cx: "256", cy: "256", r: "256", fill: "currentColor"
                    }
                },
                {
                    type: "svg",
                    element: "g",
                    attr: {
                        style: "color: #d80027"
                    },
                    attrNS: {
                        fill: "currentColor"
                    },
                    children: [
                        {
                            type: "svg",
                            element: "path",
                            attrNS: {
                                d: "M244.87 256H512c0-23.106-3.08-45.49-8.819-66.783H244.87zM244.87 122.435h229.556a257.35 257.35 0 0 0-59.07-66.783H244.87zM256 512c60.249 0 115.626-20.824 159.356-55.652H96.644C140.374 491.176 195.751 512 256 512zM37.574 389.565h436.852a254.474 254.474 0 0 0 28.755-66.783H8.819a254.474 254.474 0 0 0 28.755 66.783z"
                            }
                        }
                    ]
                },
                {
                    type: "svg",
                    element: "path",
                    attrNS: {
                        fill: "#0052b4",
                        d: "M118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037a257.407 257.407 0 0 0-49.652 55.337h7.475l-13.813 10.035a255.58 255.58 0 0 0-6.194 10.938l6.596 20.301-12.306-8.941a253.567 253.567 0 0 0-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444A258.468 258.468 0 0 0 0 256h256V0c-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765L85.104 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zM220.328 230.4l-21.699-15.765L176.93 230.4l8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z"
                    }
                },
            ]
        }
    ]
};

const countryButtonStruct = {
    element: "section",
    attr: {
        class: "inline-flex flex-row space-x-4 items-center h-full"
    },
    children: [
        svgEUAFlagStruct,
        svgBrazilFlagStruct
    ]
};

const struct = () => {
    return {
        element: "nav",
        attr: {
            class: "flex items-center justify-center flex-row flex-wrap w-full border-b border-blue-600 p-4 shadow-md uppercase font-semibold font-mono tracking-wider"
        },
        children: [
            {
                element: "nav",
                attr: {
                    class: "inline-flex w-fit h-full space-x-2 items-center"
                },
                children: [
                    {
                        element: "a",
                        attr: {
                            class: "hover:bg-blue-700 hover:text-white px-3 py-2 rounded",
                            href: "./#!/home",
                            title: language.get("canvas-menu-home")
                        },
                        text: language.get("canvas-menu-home")
                    },
                    {
                        element: "a",
                        attr: {
                            class: "hover:bg-blue-700 hover:text-white px-3 py-2 rounded",
                            href: "./#!/docs",
                            title: language.get("canvas-menu-docs")
                        },
                        text: language.get("canvas-menu-docs")
                    },
                    countryButtonStruct
                ]
            }
        ]
    }
};

export const topMenuStruct = Object.freeze(struct);