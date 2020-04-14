// get all HTML anchors
var allAnchors = document.getElementsByTagName("a");

// get the current protocol, host and port
// (this could be set to https://www.fsi.uni-tuebingen.de/ but will break when testing the website locally)
var protoHostPort = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/";

// replace all internal page links with absolute links because TOC uses relative links and
// due to the fact that <base href="/"> is set this would link to the startpage ("/")
for (var i = 0; i < allAnchors.length; i++) {
        if(allAnchors[i].href.replace(protoHostPort,'').startsWith("#") ||
           allAnchors[i].href.replace(protoHostPort,'').startsWith("/#")){
                allAnchors[i].href = window.location.pathname + allAnchors[i].href.replace(protoHostPort,'');
        }
}

