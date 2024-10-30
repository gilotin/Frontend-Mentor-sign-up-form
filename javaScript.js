// const form = document.querySelector(".signup-form");
// const inputField = document.querySelectorAll(".signup-form__input");
// const errorLabel = document.querySelectorAll(".signup-form__error-label");
// const emailSelector = document.getElementById("email");

// form.addEventListener("submit", (e) => {
//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     e.preventDefault();
//     if (firstName == "") {
//         inputField[0].classList.add("signup-form__input--error");
//         inputField[0].placeholder = "";
//         errorLabel[0]?.classList.add("active");
//         console.log(errorLabel);
//     } else {
//         inputField[0].classList.remove("signup-form__input--error");
//         inputField[0].value = "";
//         inputField[0].placeholder = "First Name";
//         errorLabel[0]?.classList.remove("active");
//     }

//     if (lastName == "") {
//         inputField[1].classList.add("signup-form__input--error");
//         inputField[1].placeholder = "";
//         errorLabel[1]?.classList.add("active");
//         console.log(errorLabel);
//     } else {
//         inputField[1].classList.remove("signup-form__input--error");
//         inputField[1].value = "";
//         inputField[1].placeholder = "Last Name";
//         errorLabel[1]?.classList.remove("active");
//     }

//     if (email === "" || !email.match(regex)) {
//         inputField[2].classList.add("signup-form__input--error");
//         emailSelector.classList.add("error-placeholder");
//         inputField[2].placeholder = "email@example/com";
//         errorLabel[2]?.classList.add("active");
//         console.log(errorLabel);
//         inputField[2].value = "";
//     } else {
//         inputField[2].classList.remove("signup-form__input--error");
//         inputField[2].value = "";
//         emailSelector.classList.remove("error-placeholder");
//         inputField[2].placeholder = "Email Address";
//         errorLabel[2]?.classList.remove("active");
//     }

//     if (password == "") {
//         inputField[3].classList.add("signup-form__input--error");
//         inputField[3].placeholder = "";
//         errorLabel[3]?.classList.add("active");
//         console.log(errorLabel);
//     } else {
//         inputField[3].classList.remove("signup-form__input--error");
//         inputField[3].value = "";
//         inputField[3].placeholder = "Password";

//         errorLabel[3]?.classList.remove("active");
//     }
// });

const form = document.querySelector(".signup-form");
const inputField = document.querySelectorAll(".signup-form__input");
const errorLabel = document.querySelectorAll(".signup-form__error-label");
const emailSelector = document.getElementById("email");

function validateInput(field, index, value, placeholder, regex = null) {
    const isValid = regex ? value.match(regex) : value.trim() !== "";

    if (!isValid) {
        field.classList.add("signup-form__input--error");
        field.placeholder = "";
        errorLabel[index]?.classList.add("active");

        if (field.id == "email") {
            inputField[2].placeholder = "email@example/com";
            emailSelector.classList.add("error-placeholder");
            inputField[2].value = "";
        }

        return false;
    } else {
        field.classList.remove("signup-form__input--error");
        field.value = "";
        field.placeholder = placeholder;
        errorLabel[index]?.classList.remove("active");

        if (field.id == "email") {
            emailSelector.classList.remove("error-placeholder");
            inputField[2].value = "";
        }
        return true;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const isFirstNameValid = validateInput(inputField[0], 0, firstName, "First Name");
    const isLastNameValid = validateInput(inputField[1], 1, lastName, "Last Name");
    const isEmailValid = validateInput(inputField[2], 2, email, "Email Address", regex);
    const isPasswordValid = validateInput(inputField[3], 3, password, "Password");
});
