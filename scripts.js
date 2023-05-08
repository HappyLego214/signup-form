const password = document.querySelector(".password");
const pswCheck = document.querySelector(".pswCheck");
const error = document.querySelector(".error");
const error1 = document.querySelector(".error1");

password.addEventListener('input', () => {
    if (password.validity.valid) {
        error.textContent = "Valid";
        error.className = "error";
        console.log("check1")
    } else {
        showError(password)
        console.log("check2")
    }
});

pswCheck.addEventListener('input', () => {
    if (pswCheck.value == password.value) {
        error1.textContent = "Valid";
        error1.className = "error";
        console.log("check3")
    } else {
        console.log("check4");
    }
});

function showError(e) {
    if (e.validity.valueMissing) {
        error.textContent = "Missing Required Value";
    } else if (e.validity.patternMismatch) {
        error.textContent = "Input Does Not Match";
    } 
    error.className = "errorActive";
}
