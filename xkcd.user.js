// ==UserScript==
// @name         XKCD - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.1
// @description  Keystrokes for XKCD
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/xkcd.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/xkcd.user.js
// @match        https://xkcd.com/*
// @grant        none
// ==/UserScript==

function pagination(e) {
    var evtobj = window.event ? event : e;
    if (evtobj.keyCode == 78 && evtobj.shiftKey) {
        // Next Page Keystroke (Shift + N)
        const next_button_element = document.querySelector("a[rel=next]");
        window.location.href = next_button_element.href;
    } else if (evtobj.keyCode == 80 && evtobj.shiftKey) {
        // Previous Page Keystroke (Shift + P)
        const prev_button_element = document.querySelector("a[rel=prev]");
        window.location.href = prev_button_element.href;
    } else if (evtobj.keyCode == 82 && evtobj.shiftKey) {
        // Random Comic Keystroke (Shift + R)
        window.location.href = "https://c.xkcd.com/random/comic/";
    }
}

document.onkeydown = pagination;
