// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").classList.remove("hidden");

    // Auto-login if saved
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      showHome(savedUser);
    }
  }, 1500);
});

// Login function
function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter a username!");
    return;
  }
  localStorage.setItem("username", username);
  showHome(username);
}

function showHome(username) {
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("home-section").classList.remove("hidden");
  document.getElementById("playerName").innerText = username;
}
