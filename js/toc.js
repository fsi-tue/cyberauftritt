/*
 * This snippet sets the title for a table of contents if
 * there is a table of contents
 */

// TOC div
var divTOC = document.getElementsByClassName("table-of-contents")[0]

let title = "Inhalt:" // Title for TOC

if (divTOC.getElementsByClassName("section-nav")[0] != null) {
    divTOC.innerHTML = "<h4>" + title + "</h4>" + divTOC.innerHTML
}
