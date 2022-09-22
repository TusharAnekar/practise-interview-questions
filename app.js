const textInput = document.querySelector ("#text-input");
const redBtn = document.querySelector ("#red-btn");
const greenBtn = document.querySelector ("#green-btn");
const blueBtn = document.querySelector ("#blue-btn");
const output = document.querySelector ("#output");

redBtn.addEventListener ("click", () => {
    output.textContent = textInput.value;
    output.style.color = "red";
})

greenBtn.addEventListener ("click", () => {
    output.textContent = textInput.value;
    output.style.color = "green";
})

blueBtn.addEventListener ("click", () => {
    output.textContent = textInput.value;
    output.style.color = "blue"
})