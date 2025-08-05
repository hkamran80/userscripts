// ==UserScript==
// @name         CalMatters' Digital Democracy - Direct Legislative Links
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Link directly to California Legislative Information, the state's official legislative portal, from Digital Democracy
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/digitaldemocracy_leglinks.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/digitaldemocracy_leglinks.user.js
// @match        https://*.digitaldemocracy.org/bills/*
// @grant        none
// ==/UserScript==

(function () {
  if (!window.location.pathname.includes("ca_")) return;

  const baseUrl =
    "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id={session}0{bill}";

  const [, sessionPretty] = document
    .querySelector("li")
    .textContent.split(": ");
  const session = sessionPretty.replace("-", "");
  const sessionUrl = baseUrl.replace("{session}", session);

  const [billId] = document.querySelector("h1").textContent.split(":");

  const linkElement = document.querySelector("main a");

  const billLinkElement = linkElement.cloneNode();
  billLinkElement.href = sessionUrl.replace("{bill}", billId.replace(" ", ""));
  billLinkElement.target = "_blank";
  billLinkElement.textContent = "Open on CA.gov";

  // Wait for page to stop changing before inserting
  let timer;

  const action = (observer) => {
    observer.disconnect();

    // The `div` in the element's parent node is the share button container.
    linkElement.parentNode.insertBefore(
      billLinkElement,
      linkElement.parentNode.querySelector("div"),
    );

    console.log("[CMDD-LEGLINKS] Bill links added");
  };

  const resetTimer = (_, observer) => {
    clearTimeout(timer);
    timer = setTimeout(action, 500, observer);
  };

  const observer = new MutationObserver(resetTimer);
  observer.observe(document, { childList: true, subtree: true });

  timer = setTimeout(action, 500, observer);
})();
