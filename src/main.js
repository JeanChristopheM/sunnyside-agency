let stylesheet = document.styleSheets[0];
let burger = document.querySelector('.hamburger');
let smallMenu = document.querySelector('.smallMenu');
let smallMenuStyle;
for (rule of stylesheet.cssRules) {
    if (rule.selectorText == `.smallMenu`) smallMenuStyle = rule;
}

window.addEventListener('click', (e) => {
    let target = e.composedPath();
    if (smallMenuStyle.style.display == "none") {
        if (target[0] == burger || target[1] == burger) {
            smallMenuStyle.style.display = "flex";
        }
    }
    else {
        if (target[1] !== smallMenu && target[0] !== smallMenu) smallMenuStyle.style.display = "none";
    }
});