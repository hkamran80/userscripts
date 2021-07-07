// ==UserScript==
// @name         qBook - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Snippets for qBraid's qBook
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/qbraid_qbook.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/qbraid_qbook.user.js
// @match        https://https://qbook.qbraid.com/learn/*
// @grant        none
// ==/UserScript==

function pagination(e) {
    var evtobj = window.event ? event : e;

    // Module Page Pagination
    if (evtobj.keyCode == 78 && evtobj.shiftKey) {
        // Next Page Keystroke (Shift + N)
        document.querySelector("div.right-navigation").click();
    } else if (evtobj.keyCode == 80 && evtobj.shiftKey) {
        // Previous Page Keystroke (Shift + P)
        document.querySelector("div.left-navigation").click();
    }
}

document.onkeydown = pagination;
