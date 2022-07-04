let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let popup = document.querySelector(".popup-wrapper");
let containerPassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@!";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;
slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}


function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
}

password.addEventListener('click', () => {
    popup.style.display = 'block'
})


popup.addEventListener('click', event => {
    let classNameOfClickedElement = event.target.classList[0]
    if(classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === "popup-wrapper") 
    popup.style.display = 'none'
})
