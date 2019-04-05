
setTimeout(function () {
    var e = document.getElementsByClassName("replace");
    for (var i = 0; i < e.length; i++) {
        var ih = "rich";
        ih += "@";
        ih += "limnous.";
        ih += "com";
        e[i].innerHTML = ih;
    }

    e = document.getElementsByClassName("mailto");
    for (var i = 0; i < e.length; i++) {
        var ih = "rich";
        ih += "@";
        ih += "limnous.";
        ih += "com";
        e[i].href = "mailto:" + ih;
    }
}, 200);


function getScrollingElement() {
    var d = document;
    return d.documentElement.scrollHeight > d.body.scrollHeight &&
        d.compatMode.indexOf("CSS1") === 0 ? d.documentElement : d.body;
}


var _HIDDEN_CLASS = "hidden";
var isIncrementing = true;
var changeScrollTop = 0;
var lastScrollTop = 0;
window.addEventListener("scroll", function (evt) {
    var scroller = evt.target.scrollingElement ? evt.target.scrollingElement : getScrollingElement();
    var targetName = scroller.nodeName.toLowerCase();
    if (targetName !== "body" && targetName !== "html") {
        return;
    }

    var targetElement = document.getElementsByTagName(targetName)[0];
    var currentScrollTop = targetElement.scrollTop;

    var diff = currentScrollTop - lastScrollTop;
    if (isIncrementing) {
        if (diff < 0) {
            isIncrementing = false;
            changeScrollTop = lastScrollTop;
        }
    } else {
        if (0 < diff) {
            isIncrementing = true;
            changeScrollTop = lastScrollTop;
        }
    }

    lastScrollTop = currentScrollTop;

    var m = document.getElementsByClassName("menu-container-hideable")[0];
    if (!isIncrementing) {
        if (100 <= changeScrollTop - currentScrollTop || currentScrollTop === 0 && m.classList.contains(_HIDDEN_CLASS)) {
            m.classList.remove(_HIDDEN_CLASS);
        }
    } else {
        if (100 <= currentScrollTop && !m.classList.contains(_HIDDEN_CLASS)) {
            m.classList.add(_HIDDEN_CLASS);
        }
    }
});
