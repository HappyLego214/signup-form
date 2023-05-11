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
    if (pswCheck.value == password.value && !(password.value == "")) {
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

function showError(foo, bar) {
    if (foo.validity.valueMissing) {
        bar.textContent = "Missing Required Value";
    } else if (foo.validity.patternMismatch) {
        bar.textContent = "Please Enter With The Required Pattern";
    } else if (foo.validity.tooShort) {
        bar.textContent = "Item Too Short";
    } else if (foo.validity.tooLong) {
        bar.textContent = "Item Too Long";
    } else {
        bar.textContent = "Invalid Format";
    }
    bar.classList.add("invalid");
    bar.classList.remove("valid");
}
