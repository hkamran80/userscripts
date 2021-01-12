// ==UserScript==
// @name         AO3 - Series Download Links
// @namespace    https://hkamran.com
// @version      1.0.0
// @description  Series Download Links for AO3, based on
// @author       H. Kamran
// @downloadUrl  https://github.com/hkamran80/userscripts/raw/main/ao3_seriesdownload.user.js
// @updateUrl    https://github.com/hkamran80/userscripts/raw/main/ao3_seriesdownload.user.js
// @match        https://archiveofourown.org/series/*
// @match        https://www.archiveofourown.org/series/*
// @grant        none
// ==/UserScript==

const base_download_url = "https://download.archiveofourown.org/downloads/",
    options = { include_tags: false };

function html_escape(str) {
    return String(str)
        .replace(/&/g, "&")
        .replace(/"/g, '"')
        .replace(/'/g, "&#39;")
        .replace(/</g, "<")
        .replace(/>/g, ">");
}

var results_div = document.createElement("div");
results_div.className = "ebookdownloads";
results_div.innerHTML +=
    '<style scoped="scoped"> .ebookdownloads p { margin: 0 auto; padding: 0.25em; clear: both; } .ebookdownloads p:hover { background: rgba(0,0,0,0.15) !important; } .ebookdownloads  p:nth-child(even) { background: rgba(0,0,0,0.05); } .ebookdownloads small.downloadtags {  margin-top: 0.35em; }; .ebookdownloads .downloadtitle { cursor:default; } .ebookdownloads .downloadlinks { float: right;}</style>';

var epub_links = [];

document.querySelectorAll("li.work, li.bookmark").forEach(function (work) {
    let _match = work
        .querySelector(".heading > a")
        .href.match(/works\/(\d*)\/?/);
    if (!_match) {
        return;
    }

    let title = work.querySelector(".heading > a").textContent,
        author = work.querySelector("[rel=author]").text,
        summary = html_escape(
            work.querySelector("blockquote.summary").textContent
        )
            .trim()
            .replace(/\.(\S)/g, ". $1"),
        id = _match[1],
        filename = title
            .replace(/[^\w _-]+/g, "")
            .replace(/ +/g, " ")
            .replace(/^(.{24}[\w.]*).*/, "$1"),
        download_url = base_download_url + id + "/" + filename;

    let results =
        '<p><span class="downloadtitle" title="' +
        summary +
        '">' +
        title +
        "</span> by " +
        author +
        '  <span class="downloadlinks"><a href="' +
        download_url +
        '.mobi">mobi</a> <a href="' +
        download_url +
        '.epub">epub</a> <a href="' +
        download_url +
        '.pdf">pdf</a> <a href="' +
        download_url +
        '.html">html</a></span></p>';
    epub_links.push(download_url + ".epub");
    results_div.innerHTML += results;
});

results_div.innerHTML +=
    "<br /><br /><textarea readonly>" + epub_links.join("\n") + "</textarea>";

document.getElementById("main").append('<div id="mass_ebook_download_modal">');

var button = document.createElement("a");
button.onclick = function () {
    window.ao3modal.show("#mass_ebook_download_modal");
    window.ao3modal.setContent(results_div, "eBook Downloads");
};
button.appendChild(
    document.createTextNode("Download Series " + String.fromCharCode(0x2193))
);
var buttonParent = document.createElement("li");
buttonParent.className = "chapter";
buttonParent.appendChild(button);
var bookmark_series_parent = document.querySelector(
    "a.bookmark_form_placement_open"
).parentElement;
bookmark_series_parent.parentElement.appendChild(buttonParent);
