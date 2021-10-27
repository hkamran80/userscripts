// ==UserScript==
// @name         Merriam-Webster - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Keystrokes for Merriam-Webster
// @author       H. Kamran
// @match        https://www.merriam-webster.com/*
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    document.onkeydown = (e) => {
        const event = window.event ? event : e;
        if (event.keyCode === 191 && document.activeElement.id !== "s-term") {
            document.getElementById("s-term").focus();
        }
    };
})();
