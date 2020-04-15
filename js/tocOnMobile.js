// move the table of contents to the top on mobile devices
// (otherwise it would be at the end of the page)

// see https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
// for mobile detection
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) &&
    !!document.getElementById("page-content")) {
	var tocContent = document.getElementsByClassName("table-of-contents");
	// it is safe to call [0] because there is only one table of contents
	var tocContentHTML = document.getElementsByClassName("table-of-contents")[0].innerHTML
	var pageContent = document.getElementById("page-content");
	pageContent.innerHTML = "<div class=\"table-of-contents\">" + tocContentHTML + "</div>" + pageContent.innerHTML;

	// alter the second element because the first is our new toc
	// see also: call by reference
	tocContent[1].innerHTML = '';
}
