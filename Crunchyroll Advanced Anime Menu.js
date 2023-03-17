// ==UserScript==
// @name         Crunchyroll Advanced Anime Menu
// @namespace    http://tampermonkey.net/
// @version      0.2
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


    var button1 = document.createElement("button");
    button1.innerHTML = "AniList - Highest Rate";
    button1.style.position = "fixed";
    button1.style.bottom = "35px";
    button1.style.right = "20px";
    button1.style.backgroundColor = '#f47521';
    button1.style.padding = "3px";

    var button2 = document.createElement("button");
    button2.innerHTML = "AniList - Highest Rate (All Time)";
    button2.style.position = "fixed";
    button2.style.bottom = "10px";
    button2.style.right = "20px";
    button2.style.backgroundColor = '#f47521';
    button2.style.padding = "3px";

    var container = document.createElement("div");
    document.body.appendChild(container);
    container.appendChild(button);
    container.appendChild(button1);
    container.appendChild(button2);

     // Add a click event listener to the button
    button.addEventListener ("click", function() {
        //window.location.href = "https://www.anisearch.de/anime/index?text=" + title;
        window.open('https://www.anisearch.de/anime/index?text=' + title[0]).focus();
    });

    button1.addEventListener ("click", function() {
        //window.location.href = "https://www.anisearch.de/anime/index?text=" + title;
        window.open('https://anilist.co/search/anime?sort=SCORE_DESC&format=TV&year=2023%25').focus();
    });

    button2.addEventListener ("click", function() {
    //window.location.href = "https://www.anisearch.de/anime/index?text=" + title;
    window.open('https://anilist.co/search/anime?sort=SCORE_DESC&format=TV').focus();
    });
})();