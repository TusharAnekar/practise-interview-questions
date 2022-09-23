const passwordText = document.querySelector ("#password-text")
const setPwdBtn = document.querySelector ("#set-pwd-btn")
const error = document.querySelector ("#error")

setPwdBtn.addEventListener ("click", () => {
    console.log(passwordText.value.length);
    if (passwordText.value.length< 10) {
        error.textContent = "Please enter more than 10 characters."
        passwordText.style.background = "red"
    }
    else {
        error.textContent = ""
        setPwdBtn.disabled = true;
    }
})