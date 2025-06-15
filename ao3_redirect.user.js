// ==UserScript==
// @name         AO3 Mirror Redirect
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Redirect the mirror sites to the main site
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_redirect.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_redirect.user.js
// @match        http*://archive.transformativeworks.org/*
// @grant        none
// ==/UserScript==

(function () {
  window.location.href = window.location.href.replace(
    "archive.transformativeworks.org",
    "archiveofourown.org",
  );
})();
