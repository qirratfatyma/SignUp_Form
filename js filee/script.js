function signUp() {

    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    var termsCheckbox = document.querySelector(".form-check-input");

    if (emailInput.value === "" || passwordInput.value === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!termsCheckbox.checked) {
        alert("Please accept the terms of service.");
        return false;
    }

     alert("Form submitted successfully!");
    return true;
}

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); 
    signUp(); 
});