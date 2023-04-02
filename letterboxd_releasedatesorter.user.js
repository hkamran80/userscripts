// ==UserScript==
// @name         Letterboxd Release Date Sorter
// @namespace    https://hkamran.com
// @version      1.1.0
// @description  Automatically applies the release date (newest first) filter on Letterboxd pages
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/letterboxd_releasedatesorter.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/letterboxd_releasedatesorter.user.js
// @match        https://letterboxd.com/actor/*
// @match        https://letterboxd.com/director/*
// @match        https://letterboxd.com/writer/*
// @match        https://letterboxd.com/producer/*
// @match        https://letterboxd.com/cinematography/*
// @match        https://letterboxd.com/costumes/*
// @match        https://letterboxd.com/make-up/*
// @match        https://letterboxd.com/set-decoration/*
// @match        https://letterboxd.com/studio/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=letterboxd.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (!window.location.href.includes("/by/")) {
        console.log("[LRDS] Changing to release date sorting...");
        if (window.location.href.includes("/page/")) {
            const splitHref = window.location.href.split("/page");
            window.location.href = `${splitHref[0]}/by/release/page/{splitHref[1]}`;
        } else {
            window.location.href = `${window.location.href}/by/release`;
        }
    }
})();
