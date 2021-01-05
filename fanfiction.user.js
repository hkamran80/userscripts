// ==UserScript==
// @name         FanFiction.net - Keystrokes
// @namespace    https://hkamran.com
// @version      1.0.4
// @description  Keystrokes for FanFiction.net
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/fanfiction.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/fanfiction.user.js
// @match        https://www.fanfiction.net/s/*
// @grant        none
// ==/UserScript==

function pagination(e) {
    var evtobj = window.event ? event : e;
    if ((evtobj.keyCode === 78 && evtobj.shiftKey) || evtobj.keyCode === 39) {
        // Next Chapter/Part in Series Keystroke (Shift + N || Right Arrow)
        const next_button_element = document.evaluate(
            "//button[contains(text(),'Next >')]",
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        window.location.href =
            window.location.protocol +
            "//" +
            window.location.host +
            next_button_element
                .getAttribute("onclick")
                .replace("self.location=", "")
                .replace("'", "")
                .replace("'", "");
    } else if (
        (evtobj.keyCode === 80 && evtobj.shiftKey) ||
        evtobj.keyCode === 37
    ) {
        // Previous Chapter/Part in Series Keystroke (Shift + P || Left Arrow)
        const prev_button_element = document.evaluate(
            "//button[contains(text(),'< Prev')]",
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        window.location.href =
            window.location.protocol +
            "//" +
            window.location.host +
            prev_button_element
                .getAttribute("onclick")
                .replace("self.location=", "")
                .replace("'", "")
                .replace("'", "");
    } else if (evtobj.keyCode == 76 && evtobj.shiftKey) {
        // Follow/Favorite Keystroke (Shift + L)
        const follow_fav_button_element = document.evaluate(
            "//button[contains(text(),'Follow/Fav')]",
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        follow_fav_button_element.click();
    }
}

document.onkeydown = pagination;
