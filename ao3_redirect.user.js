// ==UserScript==
// @name         AO3 Mirror Redirect
// @namespace    https://hkamran.com
// @version      1.0.2
// @description  Redirect the mirror sites to the main site
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_redirect.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_redirect.user.js
// @match        http*://archive.transformativeworks.org/*
// @match        http://insecure.archiveofourown.org/*
// @match        http*://archiveofourown.gay/*
// @grant        none
// ==/UserScript==

(function () {
  const mirrors = [
    "archive.transformativeworks.org",
    "insecure.archiveofourown.org",
    "archiveofourown.gay",
  ];

  if (mirrors.includes(window.location.host))
    window.location.host = "archiveofourown.org";
})();
