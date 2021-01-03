// ==UserScript==
// @name        AO3 - Download Buttons
// @description Adds download buttons to each work blurb on AO3's works index pages. (originally written by tuff)
// @namespace   ao3
// @include     http*://archiveofourown.org/*works*
// @include     http*://archiveofourown.org/*bookmarks*
// @include     http*://archiveofourown.org/*readings*
// @include     http*://archiveofourown.org/series/*
// @grant       none
// @version     2.3.1
// ==/UserScript==

(function () {
    const blurbs = Array.from(document.querySelectorAll("li.blurb"));

    if (!blurbs.length) {
        return;
    }

    const style = document.createElement("style");

    style.innerHTML = `
    .blurb .download.actions {
      position: absolute;
      right: 0.5em;
      top: 2.2em;
      white-space: nowrap;
    }

    .blurb .download .expandable {
      position: absolute;
      right: calc(100% + 0.5em);
      top: -0.5em;
    }

    .blurb .download .expandable li {
      display: inline-block;
      margin: 0;
    }

    @media only screen and (min-width: 800px) {
      .blurb .download.actions {
        right: 7em;
        top: 0.5em;
      }
    }
  `;

    document.head.appendChild(style);

    function cleanFilename(title) {
        return title
            .replace(/[^\w _-]+/g, "")
            .replace(/ +/g, " ")
            .replace(/^(.{24}[\w.]*).*/, "$1");
    }

    blurbs.forEach((blurb) => {
        let workId, title;

        try {
            const titleLink = blurb.querySelector(".header.module .heading a");

            title = titleLink.textContent.trim();
            workId = (titleLink.href.match(/\/works\/(\d+)\b/) || [])[1];
        } catch (ex) {}

        if (!workId) {
            console.log(
                "[AO3 Download Buttons] Skipping non-downloadable blurb:",
                blurb
            );
            return;
        }

        const formats = ["azw3", "epub", "mobi", "pdf", "html"];
        const tuples = formats.map((ext) => [
            ext.toUpperCase(),
            "https://download.archiveofourown.org/downloads/" +
                workId +
                "/" +
                cleanFilename(title) +
                "." +
                ext +
                "?updated_at=" +
                Date.now(),
        ]);

        blurb.innerHTML +=
            '<div class="download actions" aria-haspopup="true"><a href="#" class="collapsed">Download</a><ul class="expandable secondary hidden"></ul>';
        blurb.innerHTML += tuples
            .map(
                ([label, href]) =>
                    '<li><a href="' + href + '">' + label + "</a></li>"
            )
            .join("");
        blurb.innerHTML += "</ul></div>";

        blurb
            .querySelector(".download.actions > a")
            .addEventListener("click", (ev) => {
                const button = ev.currentTarget;

                button.classList.toggle("collapsed");
                button.classList.toggle("expanded");
                button.parentNode
                    .querySelector(".expandable")
                    .classList.toggle("hidden");

                ev.preventDefault();
            });
    });
})();
