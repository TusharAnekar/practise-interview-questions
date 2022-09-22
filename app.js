const hideText= document.querySelector ("#hide-text");
const hideBtn = document.querySelector ("#hide-btn");
const unHideBtn = document.querySelector ("#unhide-btn");

hideBtn.addEventListener ("click", () => {
    hideText.style.display = "none"
})

unHideBtn.addEventListener ("click", () => {
    hideText.style.display = "block"
})