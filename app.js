const textInput = document.querySelector ("#text-input");
const h1Btn = document.querySelector ("#h1-btn");
const h2Btn = document.querySelector ("#h2-btn");
const h3Btn = document.querySelector ("#h3-btn");
const output = document.querySelector ("#output");

h1Btn.addEventListener ("click", () => {
    output.innerHTML = `<h1>${textInput.value}</h1>`;
})

h2Btn.addEventListener ("click", () => {
    output.innerHTML = `<h2>${textInput.value}</h2>`;
})

h3Btn.addEventListener ("click", () => {
    output.innerHTML = `<h3>${textInput.value}</h3>`
})