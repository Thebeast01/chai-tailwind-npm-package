import { initChaiTailwind as coreInit } from "./main";

let isInitialized = false;

function safeInit() {
    if (isInitialized) return;
    isInitialized = true;
    coreInit();
}

export { safeInit as initChaiTailwind };

if (typeof window !== "undefined") {
    window.ChaiTailwind = {
        init: safeInit,
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", safeInit); 
    } else {
        safeInit();
    }
}
