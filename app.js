const inputText = document.querySelector ("#input-text");
const increaseFontSize =  document.querySelector ("#increase-font-size");
const decreaseFontSize = document.querySelector ("#decrease-font-size");

increaseFontSize.addEventListener ("click", ()=> {
    let style = window.getComputedStyle (inputText, null).getPropertyValue("font-size");
    console.log (style);
    let fontSize = parseFloat (style);
    console.log (fontSize)
    inputText.style.fontSize = (fontSize+1) + "px"
})

decreaseFontSize.addEventListener ("click", () => {
    let style = window.getComputedStyle (inputText, "").getPropertyValue ("font-size");
    let fontSize = parseFloat (style);
    inputText.style.fontSize = (fontSize - 1) + "px"
})