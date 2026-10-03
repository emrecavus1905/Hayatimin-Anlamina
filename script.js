function openSecret() {
    document.getElementById("secret-section").classList.add("active");
}

function closeSecret() {
    document.getElementById("secret-section").classList.remove("active");
}

function checkPassword() {

    const password = document.getElementById("password").value;

    if (password === "askimiz") {

        document.getElementById("password-area").style.display = "none";

        document.getElementById("secret-content").style.display = "block";

    } else {

        document.getElementById("error-message").textContent =
            "Şifre yanlış ❤️";

    }
}
