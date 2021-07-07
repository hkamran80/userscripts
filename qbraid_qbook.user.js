// ==UserScript==
// @name         qBook - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.1
// @description  Snippets for qBraid's qBook
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/qbraid_qbook.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/qbraid_qbook.user.js
// @match        https://qbook.qbraid.com/learn/*
// @grant        none
// ==/UserScript==

document.onkeydown = (e) => {
    var evtobj = window.event ? event : e;

    // Section Pagination
    if (evtobj.keyCode === 39) {
        // Next Page Keystroke (Right Arrow)
        document.querySelector("div.right-navigation").click();
    } else if (evtobj.keyCode === 37) {
        // Previous Page Keystroke (Left Arrow)
        document.querySelector("div.left-navigation").click();
    }
};
