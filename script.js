// Check login on page load
window.onload = function () {
    if (localStorage.getItem("loggedIn") === "true") {
        showHome();
    }
};

function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // DEMO credentials
    if (user === "admin" && pass === "1234") {
        localStorage.setItem("loggedIn", "true");
        showHome();
    } else {
        document.getElementById("error").innerText =
            "Invalid username or password";
    }
}

function showHome() {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}