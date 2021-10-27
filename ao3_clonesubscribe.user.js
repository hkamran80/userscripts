// ==UserScript==
// @name         ao3 clone subscribe button
// @namespace    https://greasyfork.org/en/users/36620
// @version      0.2
// @description  recreate subscribe button at end of works
// @author       scriptfairy
// @include      /https?://archiveofourown\.org/works/\d+/
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_clonesubscribe.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_clonesubscribe.user.js
// @grant        none
// ==/UserScript==

(function ($) {
    $(document).ready(function () {
        var sub = $("li.subscribe").clone();
        $("#new_kudo").parent().after(sub);
    });
})(window.jQuery);
