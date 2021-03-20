// ==UserScript==
// @name         FanFiction.net - Mobile Redirect
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Redirect the mobile site to the desktop site - FanFiction.net
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/fanfictionmobileredirect.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/fanfictionmobileredirect.user.js
// @match        http*://m.fanfiction.net/*
// @grant        none
// ==/UserScript==

(function () {
    window.location.href = window.location.href.replace(
        "m.fanfiction.net",
        "www.fanfiction.net"
    );
})();
