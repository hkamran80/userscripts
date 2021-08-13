// ==UserScript==
// @name         Canvas Module Automatic Next Clicker
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Self-explanatory
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/canvas_autonext.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/canvas_autonext.user.js
// @match        https://*.instructure.com/courses/*
// @icon         https://www.google.com/s2/favicons?domain=instructure.com
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    setInterval(function () {
        console.debug("Clicking next...");
        document
            .querySelector("span.module-sequence-footer-button--next a")
            .click();
    }, 2000);
})();
