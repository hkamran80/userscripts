// ==UserScript==
// @name         CA Governor Legislation Links
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Link all legislation on the California governor's website
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/cagov_legislation.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/cagov_legislation.user.js
// @match        https://gov.ca.gov/*
// @match        https://www.gov.ca.gov/*
// @grant        none
// ==/UserScript==

(function () {
  if (
    !document.querySelector("h1").toLowerCase().includes("signs legislation") ||
    !window.location.pathname.includes("signs-legislation") ||
    !window.location.pathname.includes("legislation")
  )
    return;

  const baseUrl =
    "https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id={session}0{bill}";

  const getLegislativeSession = (year) => {
    const start = year % 2 === 0 ? year - 1 : year;
    return `${start}${start + 1}`;
  };

  const dateString = document.querySelector(
    "meta[property='article:published_time']",
  ).content;
  const year = new Date(dateString).getFullYear();

  const session = getLegislativeSession(year);
  const sessionUrl = baseUrl.replace("{session}", session);

  const bills = document.querySelectorAll("article ul li");
  for (const bill of bills) {
    const [billId] = bill.textContent.split(" by ");
    const billUrl = sessionUrl.replace("{bill}", billId.replaceAll(" ", ""));

    bill.innerHTML = bill.innerHTML.replace(
      billId,
      `<a href="${billUrl}" target="_blank" rel="noopener noreferrer">${billId}</a>`,
    );
  }

  console.log("[CAGOV-LEGLINKS] Bill links added");
})();
