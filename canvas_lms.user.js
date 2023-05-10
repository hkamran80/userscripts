// ==UserScript==
// @name         Canvas LMS - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.3
// @description  Snippets for the Canvas LMS
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/canvas_lms.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/canvas_lms.user.js
// @match        https://*.instructure.com/courses/*
// @grant        none
// ==/UserScript==

/**
 * The pagination function
 * @param {Event} e The event object
 */
const pagination = (e) => {
    const event = window.event ? window.event : e;

    if (
        document.activeElement.tagName.toLowerCase() !== "textarea" &&
        document.activeElement.tagName.toLowerCase() !== "input"
    ) {
        // Module Page Pagination
        if ((event.keyCode === 78 && event.shiftKey) || event.keyCode === 39) {
            // Next Page Keystroke (Shift + N, right arrow)
            const next_button_element = document.querySelector(
                "span.module-sequence-footer-button--next a"
            );
            window.location.href = next_button_element.href;
        } else if (
            (event.keyCode === 80 && event.shiftKey) ||
            event.keyCode === 37
        ) {
            // Previous Page Keystroke (Shift + P, left arrow)
            const prev_button_element = document.querySelector(
                "span.module-sequence-footer-button--previous a"
            );
            window.location.href = prev_button_element.href;
        }
    }
};

document.onkeydown = pagination;
