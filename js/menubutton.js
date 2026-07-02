// 1. HTML für den Button aus #menubutton-template kopieren und Menübutton definieren
const buttonHTML = document.querySelector("#menubutton-template").content.cloneNode(true);
const menuButton = buttonHTML.querySelector("button");

// 2. Elternelement und Navigationsliste finden und kopiertes HTML einfügen
const navlistParent = document.querySelector(".hauptnavigation");
const navlist = navlistParent.querySelector("ul");

navlistParent.insertBefore(buttonHTML, navlist);

// 3. Wert von aria-expanded bei Klick auf Button umschalten
menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));
});