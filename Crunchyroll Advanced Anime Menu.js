// ==UserScript==
// @name         Crunchyroll Advanced Anime Menu
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Adds a button on Crunchyroll site to search anime title on AniSearch site
// @author       Plex19
// @match        https://www.crunchyroll.com/de/series/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";
    let button, button1, button2, container, title;

        container = document.createElement("div");
        button = document.createElement("button");
        button1 = document.createElement("button");
        button2 = document.createElement("button");

        document.body.appendChild(container);
        container.appendChild(button);
        container.appendChild(button1);
        container.appendChild(button2);

        container.style.position = "fixed";
        container.style.bottom = "40px";
        container.style.right = "20px";
        container.style.display = "grid";

        setStyle(button, "Go to AniSearch");
        setStyle(button1, "AniList - Highest Rate");
        setStyle(button2, "AniList - Highest Rate (All Time)");

    function setStyle(element, text) {

        var bgColor = "#f47521";
        var padding = "0.33rem 0.2rem";

        element.innerHTML = text;
        element.style.backgroundColor = bgColor;
        element.style.padding = padding;
    }

    // Add a click event listener to the button
    button.addEventListener("click", function () {
        title = document
        .querySelector('meta[property="og:title"]')
        .getAttribute("content"); // get title of current Crunchyroll page

        title = title.replace(/Watch/g, "");
        title = title.split("|");

        window
            .open("https://www.anisearch.de/anime/index?text=" + title[0])
            .focus();
    });
    button1.addEventListener("click", function () {
        window
            .open(
                "https://anilist.co/search/anime?sort=SCORE_DESC&format=TV&year="+new Date().getFullYear()+"%25"
            )
            .focus();
    });
    button2.addEventListener("click", function () {
        window
            .open("https://anilist.co/search/anime?sort=SCORE_DESC&format=TV")
            .focus();
    });
})();