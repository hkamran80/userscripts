// ==UserScript==
// @name         AO3 - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.4
// @description  Keystrokes for AO3
// @author       H. Kamran
// @downloadUrl  https://gist.github.com/hkamran80/a9bc0a6c13d1137d150980d425d7d025/raw/ao3.user.js
// @updateUrl    https://gist.github.com/hkamran80/a9bc0a6c13d1137d150980d425d7d025/raw/ao3.user.js
// @match        http*://archiveofourown.org/works/*
// @match        http*://archiveofourown.org/collections/*
// @match        http*://archiveofourown.org/tags/*
// @grant        none
// ==/UserScript==

function work_pagination(e) {
    var evtobj = window.event? event : e
    if ((evtobj.keyCode === 78 && evtobj.shiftKey) || (evtobj.keyCode === 39)) {
        // Next Page Keystroke (Shift + N || Right Arrow)
        const next_button_element = document.querySelector(".chapter.next a") || document.querySelector(".series .next");
        window.location.href = next_button_element.href;
    } else if ((evtobj.keyCode === 80 && evtobj.shiftKey) || (evtobj.keyCode === 37)) {
        // Previous Page Keystroke (Shift + P || Left Arrow)
        const prev_button_element = document.querySelector(".chapter.previous a") || document.querySelector(".series .previous");
        window.location.href = prev_button_element.href;
    }
}

function collection_pagination(e) {
    var evtobj = window.event? event : e
    if (evtobj.keyCode == 78 && evtobj.shiftKey) {
        // Next Page Keystroke (Shift + N)
        const next_button_element = document.querySelector("li.next a[rel=next]");
        window.location.href = next_button_element.href;
    } else if (evtobj.keyCode == 80 && evtobj.shiftKey) {
        // Previous Page Keystroke (Shift + P)
        const prev_button_element = document.querySelector("li.previous a[rel=prev]");
        window.location.href = prev_button_element.href;
    }
}

if ((window.location.href.indexOf("/collections/") !== -1 || window.location.href.indexOf("/tags/")) && window.location.href.indexOf("/works/") === -1) {
    console.info("[AO3 Keystrokes] Using collection pagination keystrokes");
    document.onkeydown = collection_pagination;
} else if (window.location.href.indexOf("/works/") !== -1) {
    console.info("[AO3 Keystrokes] Using work pagination keystrokes");
    document.onkeydown = work_pagination;
}
