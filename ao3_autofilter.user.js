// ==UserScript==
// @name         AO3 - Auto-filter
// @namespace    https://hkamran.com
// @version      1.0.1
// @description  Keystrokes for AO3
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_autofilter.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_autofilter.user.js
// @match        http*://archiveofourown.org/collections/*
// @match        http*://archiveofourown.org/tags/*
// @match        http*://www.archiveofourown.org/collections/*
// @match        http*://www.archiveofourown.org/tags/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  if (
    window.location.href.includes("/works") &&
    (!window.location.href.includes("?") ||
      window.location.href.includes("?page="))
  ) {
    console.log("[AO3-AF] Applying filters (English, exclude crossovers)...");

    let newURL = `${
      window.location.href.includes("?")
        ? window.location.href.split("?")[0]
        : window.location.href
    }?commit=Sort+and+Filter`;

    if (window.location.href.includes("page=")) {
      const pageIndex = window.location.href.indexOf("page=");
      const nextAmpersand = window.location.href.indexOf("&", pageIndex);

      newURL += `&page=${window.location.href.slice(
        pageIndex + 5,
        nextAmpersand < 0 ? window.location.href.length : nextAmpersand
      )}`;
    }
    // work_search[crossover] - [blank] (include), F (exclude), T (only)
    window.location.href = `${newURL}&work_search[complete]=&work_search[crossover]=F&work_search[date_from]=&work_search[date_to]=&work_search[excluded_tag_names]=&work_search[language_id]=en&work_search[other_tag_names]=&work_search[query]=&work_search[sort_column]=revised_at&work_search[words_from]=&work_search[words_to]=`;
  }
})();
