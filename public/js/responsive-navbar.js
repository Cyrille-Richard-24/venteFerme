function responsive() {
    var x = document.getElementById("navbar");
    if (x.className === "header__navbar") {
      x.className += " responsive ";
    } else {
      x.className = "header__navbar";
    }
}