// ==UserScript==
// @name         FanFiction.Net - Mobile Redirect
// @namespace    https://hkamran.com
// @version      1.0.1
// @description  Redirect the mobile site to the desktop site
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/fanfictionmobileredirect.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/fanfictionmobileredirect.user.js
// @match        http*://m.fanfiction.net/*
// @grant        none
// ==/UserScript==

(function () {
  window.location.host = "www.fanfiction.net";
})();
