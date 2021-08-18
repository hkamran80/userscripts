// ==UserScript==
// @name         Canvas LMS - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.2
// @description  Snippets for the Canvas LMS
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/canvas_lms.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/canvas_lms.user.js
// @match        https://*.instructure.com/courses/*
// @grant        none
// ==/UserScript==

function pagination(e) {
    var evtobj = window.event ? event : e;

    // Module Page Pagination
    if ((evtobj.keyCode === 78 && evtobj.shiftKey) || evtobj.keyCode === 39) {
        // Next Page Keystroke (Shift + N)
        const next_button_element = document.querySelector(
            "span.module-sequence-footer-button--next a"
        );
        window.location.href = next_button_element.href;
    } else if (
        (evtobj.keyCode === 80 && evtobj.shiftKey) ||
        evtobj.keyCode === 37
    ) {
        // Previous Page Keystroke (Shift + P)
        const prev_button_element = document.querySelector(
            "span.module-sequence-footer-button--previous a"
        );
        window.location.href = prev_button_element.href;
    }
}

document.onkeydown = pagination;
