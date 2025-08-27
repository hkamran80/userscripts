// ==UserScript==
// @name         AO3 - Auto-filter
// @namespace    https://hkamran.com
// @version      1.1.0
// @description  Automatically filter work pages on AO3
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_autofilter.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_autofilter.user.js
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
   * A map of crossover statuses to search parameters
   * @type {Object.<CrossoverStatus, string>}
   */
  const crossoverMap = {
    include: "",
    exclude: "F",
    only: "T",
  };

  if (
    window.location.pathname.includes("/works") &&
    (!window.location.search.includes("?") ||
      window.location.search.includes("?page="))
  ) {
    // The timeout is needed to give time for the configuration to load.
    setTimeout(() => {
      console.log("[AO3-AF] Applying filters...");

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
      const config = window.ao3AutofilterConfig;
      if (!config)
        console.log(
          "[AO3-AF] No configuration found, using defaults (English, exclude crossovers, no AI).",
        );

      const searchParams = new URLSearchParams();

      const existingSearchParams = new URLSearchParams(window.location.search);
      if (existingSearchParams.has("page")) {
        searchParams.set("page", existingSearchParams.get("page"));
      }

      searchParams.set(
        "work_search[crossover]",
        config?.crossover ?? crossoverMap["exclude"],
      );
      searchParams.set("work_search[language_id]", config?.language ?? "en");

      // Excluded Tags
      const excludedTags = ["Created Using Generative AI"];
      searchParams.set(
        "work_search[excluded_tag_names]",
        (config?.excludedTags ?? excludedTags).join(","),
      );

      window.location.search = searchParams.toString();
    }, 10);
  }
})();
