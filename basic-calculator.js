// 🌓 Theme toggle with localStorage
const html = document.documentElement;
const switchInput = document.getElementById("themeSwitch");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-bs-theme", savedTheme);
  switchInput.checked = savedTheme === "dark";
}

switchInput.addEventListener("change", () => {
  const newTheme = switchInput.checked ? "dark" : "light";
  html.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// 📊 Calculator Logic
function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
  }

  let operationSymbol;
  switch (operation) {
    case "add":
      operationSymbol = "+";
      break;
    case "subtract":
      operationSymbol = "−";
      break;
    case "multiply":
      operationSymbol = "×";
      break;
    case "divide":
      operationSymbol = "÷";
      break;
  }
  
  document.getElementById("output").innerText = `${num1} ${operationSymbol} ${num2} = ${result}`;
  document.getElementById("result").style.display = "block";
}
