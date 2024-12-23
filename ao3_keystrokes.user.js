// ==UserScript==
// @name         AO3 - Keystrokes
// @namespace    https://hkamran.com
// @version      1.2.2
// @description  Keystrokes for AO3
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_keystrokes.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_keystrokes.user.js
// @match        http*://archiveofourown.org/works/*
// @match        http*://archiveofourown.org/collections/*
// @match        http*://archiveofourown.org/tags/*
// @match        http*://archiveofourown.org/series/*
// @match        http*://www.archiveofourown.org/works/*
// @match        http*://www.archiveofourown.org/collections/*
// @match        http*://www.archiveofourown.org/tags/*
// @match        http*://www.archiveofourown.org/series/*
// @match        http*://squidgeworld.org/works/*
// @match        http*://squidgeworld.org/collections/*
// @match        http*://squidgeworld.org/tags/*
// @match        http*://squidgeworld.org/series/*
// @grant        none
// ==/UserScript==

/**
 * Keystrokes for work pages
 * @param {Event} e The event object
 */
const workKeystrokes = (e) => {
  const evtobj = window.event ? window.event : e;

  if (
    document.activeElement.tagName.toLowerCase() !== "textarea" &&
    document.activeElement.name !== "comment[comment_content]"
  ) {
    if ((evtobj.keyCode === 78 && evtobj.shiftKey) || evtobj.keyCode === 39) {
      // Next chapter/part in series (Shift + N or Right Arrow)
      const nextChapterElement =
        document.querySelector(".chapter.next a") ||
        document.querySelector(".series .next");
      window.location.href = nextChapterElement.href;
    } else if (
      (evtobj.keyCode === 80 && evtobj.shiftKey) ||
      evtobj.keyCode === 37
    ) {
      // Previous chapter/part in series (Shift + P or Left Arrow)
      const previousChapterElement =
        document.querySelector(".chapter.previous a") ||
        document.querySelector(".series .previous");
      window.location.href = previousChapterElement.href;
    } else if (evtobj.keyCode === 75) {
      // Kudos (K)
      document.querySelector("form#new_kudo input[type=submit]").click();
    } else if (evtobj.keyCode === 67) {
      // Toggle comments (C)
      document.querySelector("#show_comments_link a").click();
    } else if (evtobj.keyCode === 83 && evtobj.shiftKey) {
      // Subscribe (Shift + S)
      document
        .querySelector("form#new_subscription input[type=submit]")
        .click();
    }
  } else {
    if (
      evtobj.keyCode === 13 &&
      evtobj.shiftKey &&
      document
        .querySelector("textarea[name='comment[comment_content]']")
        .value.trim().length > 0
    ) {
      // Add comment (Shift + Enter)
      document.querySelector("form.new_comment").submit();
    }
  }
};

/**
 * Keystrokes for series pages
 * @param {Event} e The event object
 */
const seriesPagination = (e) => {
  const evtobj = window.event ? window.event : e;

  if (evtobj.keyCode === 83 && evtobj.shiftKey) {
    // Subscribe (Shift + S)
    document.querySelector("form#new_subscription input[type=submit]").click();
  }
};

/**
 * Keystrokes for collection pages
 * @param {Event} e The event object
 */
const collectionPagination = (e) => {
  const evtobj = window.event ? window.event : e;

  if ((evtobj.keyCode === 78 && evtobj.shiftKey) || evtobj.keyCode === 39) {
    // Next page (Shift + N or Right Arrow)
    const nextPageElement = document.querySelector("li.next a[rel=next]");
    window.location.href = nextPageElement.href;
  } else if (
    (evtobj.keyCode === 80 && evtobj.shiftKey) ||
    evtobj.keyCode === 37
  ) {
    // Previous page (Shift + P or Left Arrow)
    const previousPageElement = document.querySelector(
      "li.previous a[rel=prev]",
    );
    window.location.href = previousPageElement.href;
  }
};

if (
  (window.location.href.includes("/collections/") ||
    window.location.href.includes("/tags/")) &&
  !window.location.href.includes("/works/")
) {
  console.info("[AO3 Keystrokes] Using collection pagination keystrokes");
  document.onkeydown = collectionPagination;
} else if (window.location.href.includes("/works/")) {
  console.info("[AO3 Keystrokes] Using work pagination keystrokes");
  document.onkeydown = workKeystrokes;
} else if (window.location.href.includes("/series/")) {
  console.info("[AO3 Keystrokes] Using series pagination keystrokes");
  document.onkeydown = seriesPagination;
}
