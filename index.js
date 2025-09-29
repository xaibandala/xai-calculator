// 🌓 Theme toggle with localStorage
const html = document.documentElement;
const switchInput = document.getElementById("themeSwitch");

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-bs-theme", savedTheme);
  switchInput.checked = savedTheme === "dark";
}

// Listen for toggle
switchInput.addEventListener("change", () => {
  const newTheme = switchInput.checked ? "dark" : "light";
  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// 🧮 Percentage Calculator Script
function calculatePercent() {
  const amount = parseFloat(document.getElementById("amount").value);
  const percent = parseFloat(document.getElementById("percent").value);

  if (isNaN(amount) || isNaN(percent)) {
    alert("Please enter valid numbers.");
    return;
  }

  const result = amount * (percent / 100);
  document.getElementById("output").innerText = `${percent}% of ₱${amount.toFixed(2)} is ₱${result.toFixed(2)}`;
  document.getElementById("result").style.display = "block";
}
