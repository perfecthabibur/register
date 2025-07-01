(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }
})();


//Dark Light//
function toggleTheme(e) {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark-mode");
  document.getElementById("theme-icon").className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#1e1e1e' : '#e0e5ec');
}

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");
  if (savedTheme === "dark") {
    icon.className = "fa-solid fa-moon";
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1e1e1e');
  } else {
    icon.className = "fa-solid fa-sun";
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#e0e5ec');
  }
}

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.className = "fa-solid fa-eye-slash toggle-password";
  } else {
    passwordInput.type = "password";
    toggleIcon.className = "fa-solid fa-eye toggle-password";
  }
}  


// 🎇 Updated Firework Effect Generator
function createFirework() {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = Math.random() * 100 + "vw";
  firework.style.top = Math.random() * 100 + "vh";
  firework.style.background = `radial-gradient(circle, ${randomColor()}, ${randomColor()})`;
  document.body.appendChild(firework);
  setTimeout(() => firework.remove(), 2000);
}

function randomColor() {
  const colors = ["#ff0", "#f00", "#0ff", "#f0f", "#0f0", "#00f", "#fff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

setInterval(createFirework, 250);