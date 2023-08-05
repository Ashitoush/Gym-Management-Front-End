const logout = document.getElementById("logout");

logout.addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "http://127.0.0.1:5500/examples/login.html";
})