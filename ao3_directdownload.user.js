// ==UserScript==
// @name         AO3 - Direct Download Links
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Direct download links for AO3
// @author       H. Kamran
// @match        http*://archiveofourown.org/works/*
// @match        http*://archiveofourown.org/collections/*
// @match        http*://www.archiveofourown.org/works/*
// @match        http*://www.archiveofourown.org/collections/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.location.href.indexOf("/works/") !== -1) {
        for (let element_a of document.querySelector("li.download ul.expandable.secondary").getElementsByTagName("a")) {
            element_a.href = element_a.href.replace("//arc", "//download.arc")
        }
    }
})();
