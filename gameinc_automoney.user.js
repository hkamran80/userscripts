// ==UserScript==
// @name         Gameinc.io - Auto-money Gatherer
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Generate money for Gameinc.io
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/gameinc_automoney.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/gameinc_automoney.user.js
// @match        http*://gameinc.io
// @grant        none
// ==/UserScript==

(function () {
    if (!document.getElementById("startCompanyModal").classList.contains("present")) {
        setInterval(function() {
            socket.emit("make money")
        }, 500);
    }
})();
