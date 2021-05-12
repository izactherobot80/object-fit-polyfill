function isIE() {
  return window.navigator.userAgent.match(/MSIE|Trident/) !== null;
}

if (isIE && "objectFit" in document.documentElement.style === false) {
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelectorAll("img");
    for (var i = 0; i < el.length; i++) {
      if (el[i].currentStyle["object-fit"]) {
        console.log("IE object fit");
        el[i].style.background =
          'url("' +
          el[i].src +
          '") no-repeat ' +
          el[i].currentStyle["object-position"] +
          "/" +
          el[i].currentStyle["object-fit"];
        el[i].src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
          el[i].width +
          "' height='" +
          el[i].height +
          "'%3E%3C/svg%3E";
      }
    }
  });
}
