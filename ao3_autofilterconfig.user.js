// ==UserScript==
// @name         AO3 - Auto-filter Configuration
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Configuration for the AO3 Auto-filter userscript
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_autofilterconfig.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_autofilterconfig.user.js
// @match        https://archiveofourown.org/collections/*
// @match        https://archiveofourown.org/tags/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archiveofourown.org
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  /**
   * The AO3 crossover status
   * @typedef {("include"|"exclude"|"only")} CrossoverStatus
   */

  /**
   * `window.ao3AutofilterConfig` is a configuration object like AO3 Savior's.
   * Leaving any property undefined will use the default value.
   *
   * @property {CrossoverStatus} crossover - The crossover status
   * @property {string} language - Any ISO 639-1 language code support by AO3
   * @property {string[]} excludedTags - The tags to exclude
   *
   * @example
   * window.ao3AutofilterConfig = {
   *   crossover: "exclude",
   *   language: "en",
   *   excludedTags: ["Created Using Generative AI"]
   * }
   */
  window.ao3AutofilterConfig = {};
})();
