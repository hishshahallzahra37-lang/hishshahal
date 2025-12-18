const content = document.getElementById("content");
const loginSection = document.getElementById("login-section");
const logoutBtn = document.getElementById("logoutBtn");

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user && pass) {
        localStorage.setItem("loggedIn", "true");
        showContent();
    } else {
        alert("Isi username dan password!");
    }
}

function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}

function showContent() {
    loginSection.style.display = "none";
    content.style.display = "block";
}

logoutBtn.addEventListener("click", logout);

// Auto login
if (localStorage.getItem("loggedIn") === "true") {
    showContent();
}
