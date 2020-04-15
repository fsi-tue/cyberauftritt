// get all HTML anchors
var allAnchors = document.getElementsByTagName("a");

// if the port is 80 or 443, window.location.port will be empty
if (window.location.port == '' || window.location.port == null){
	var portOfPage = "/";
} else {
	var portOfPage = ":" + window.location.port + "/";
}

// get the current protocol, host and port
// (this could be set to https://www.fsi.uni-tuebingen.de/ but will break when testing the website locally)
var protoHostPort = window.location.protocol + "//" + window.location.hostname + portOfPage;

// replace all internal page links with absolute links because TOC uses relative links and
// due to the fact that <base href="/"> is set this would link to the startpage ("/")
for (var i = 0; i < allAnchors.length; i++) {
        if(allAnchors[i].href.replace(protoHostPort,'').startsWith("#") ||
           allAnchors[i].href.replace(protoHostPort,'').startsWith("/#")){
                allAnchors[i].href = window.location.pathname + allAnchors[i].href.replace(protoHostPort,'');
        }
}

