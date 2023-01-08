// ==UserScript==
// @name         AO3 - Keystrokes
// @namespace    https://hkamran.com
// @version      1.1.0
// @description  Keystrokes for AO3
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_keystrokes.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_keystrokes.user.js
// @match        http*://archiveofourown.org/works/*
// @match        http*://archiveofourown.org/collections/*
// @match        http*://archiveofourown.org/tags/*
// @match        http*://www.archiveofourown.org/works/*
// @match        http*://www.archiveofourown.org/collections/*
// @match        http*://www.archiveofourown.org/tags/*
// @grant        none
// ==/UserScript==

const workKeystrokes = (e) => {
    const evtobj = window.event ? event : e;

    if (
        document.activeElement.tagName.toLowerCase() !== "textarea" &&
        document.activeElement.name !== "comment[comment_content]"
    ) {
        if (
            (evtobj.keyCode === 78 && evtobj.shiftKey) ||
            evtobj.keyCode === 39
        ) {
            // Next Chapter/Part in Series Keystroke (Shift + N or Right Arrow)
            const nextChapterElement =
                document.querySelector(".chapter.next a") ||
                document.querySelector(".series .next");
            window.location.href = nextChapterElement.href;
        } else if (
            (evtobj.keyCode === 80 && evtobj.shiftKey) ||
            evtobj.keyCode === 37
        ) {
            // Previous Chapter/Part in Series Keystroke (Shift + P or Left Arrow)
            const previousChapterElement =
                document.querySelector(".chapter.previous a") ||
                document.querySelector(".series .previous");
            window.location.href = previousChapterElement.href;
        } else if (evtobj.keyCode === 75) {
            // Kudos Keystroke (K)
            document.querySelector("form#new_kudo input[type=submit]").click();
        } else if (evtobj.keyCode === 67) {
            // Toggle comments (C)
            document.querySelector("#show_comments_link a").click();
        } else if (evtobj.keyCode === 83 && evtobj.shiftKey) {
            // Subscribe (Shift + S)
            document.querySelector("form#new_subscription input[type=submit]").click();
        }
    }
};

const collectionPagination = (e) => {
    const evtobj = window.event ? event : e;
    if ((evtobj.keyCode === 78 && evtobj.shiftKey) || evtobj.keyCode === 39) {
        // Next Page Keystroke (Shift + N || Right Arrow)
        const nextPageElement = document.querySelector("li.next a[rel=next]");
        window.location.href = nextPageElement.href;
    } else if (
        (evtobj.keyCode === 80 && evtobj.shiftKey) ||
        evtobj.keyCode === 37
    ) {
        // Previous Page Keystroke (Shift + P || Left Arrow)
        const previousPageElement = document.querySelector(
            "li.previous a[rel=prev]"
        );
        window.location.href = previousPageElement.href;
    }
};

if (
    (window.location.href.indexOf("/collections/") !== -1 ||
        window.location.href.indexOf("/tags/")) &&
    window.location.href.indexOf("/works/") === -1
) {
    console.info("[AO3 Keystrokes] Using collection pagination keystrokes");
    document.onkeydown = collectionPagination;
} else if (window.location.href.indexOf("/works/") !== -1) {
    console.info("[AO3 Keystrokes] Using work pagination keystrokes");
    document.onkeydown = workKeystrokes;
}
