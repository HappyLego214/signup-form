const password = document.querySelector(".password");
const pswCheck = document.querySelector(".pswCheck");
const error = document.querySelector(".error");
const checkError = document.querySelector(".checkError");
const credential = document.querySelectorAll(".credential");

credential.forEach((cred) => {
    cred.addEventListener('input', () => {
        let z = cred.nextElementSibling;
        if (cred.validity.valid) {
            z.textContent = "Valid";
            z.classList.add("valid");
            z.classList.remove("invalid");
        } else {
            showError(cred, z);
        }
    })
});

password.addEventListener('input', () => {
    passwordInput();
    passwordValid();
});

pswCheck.addEventListener('input', () => {
    passwordValid();
});

function passwordInput() {
    if (password.validity.valid) {
        error.textContent = "Valid";
        error.classList.add("valid"); 
        error.classList.remove("invalid");

    } else {
        showError(password, error)
    }
}

function passwordValid() {
    if (pswCheck.value == password.value && !(password.value == "" || password.value.valid)) {
        checkError.textContent = "Valid";
        checkError.classList.add("valid"); 
        checkError.classList.remove("invalid");
    } else if (pswCheck.value != password.value) {
        checkError.textContent = "Password Does Not Match"
        checkError.classList.add("invalid"); 
        checkError.classList.remove("valid");
    } else if (password.value == "") {
        checkError.textContent = "Missing Password";
        checkError.classList.add("invalid"); 
        checkError.classList.remove("valid");
    }
}

function showError(input, message) {
    if (input.validity.valueMissing) {
        message.textContent = "Missing Required Value";
    } else if (input.validity.patternMismatch) {
        message.textContent = "Please Enter With The Required Pattern";
    } else if (input.validity.tooShort) {
        message.textContent = "Item Too Short";
    } else if (input.validity.tooLong) {
        message.textContent = "Item Too Long";
    } else {
        message.textContent = "Invalid Format";
    }
    message.classList.add("invalid");
    message.classList.remove("valid");
}
