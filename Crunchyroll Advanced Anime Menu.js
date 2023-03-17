// ==UserScript==
// @name         Crunchyroll Advanced Anime Menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a button on Crunchyroll site to search anime title on AniSearch site
// @author       Plex19
// @match        https://www.crunchyroll.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=crunchyroll.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let title = document.querySelector('meta[property="og:title"]').getAttribute('content'); // get title of current Crunchyroll page
    //let title = document.querySelector('div.card:nth-child(4) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > small:nth-child(1)');

    title = title.replace(/Watch/g, "");
    title = title.split('|');

    var button = document.createElement("button");
    button.innerHTML = "Go to AniSearch";
    button.style.position = "fixed";
    button.style.bottom = "60px";
    button.style.right = "20px";
    button.style.backgroundColor = '#f47521';
    button.style.padding = "3px";

    document.body.appendChild(button);

     // Add a click event listener to the button
    button.addEventListener ("click", function() {
        //window.location.href = "https://www.anisearch.de/anime/index?text=" + title;
        window.open('https://www.anisearch.de/anime/index?text=' + title[0]).focus();
    });
})();