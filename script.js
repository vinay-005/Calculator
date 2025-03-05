// Select all calculator buttons and the input field where the result is displayed
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// Loop through each button and add a click event listener
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    
    // Perform actions based on the button clicked
    if (buttonValue === "AC") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else if (buttonValue === "DEL") {
      backspace();
    } else {
      appendValue(buttonValue);
    }
  });
}

// Function to clear the calculator input field
function clearResult() {
  inputFieldEl.value = "";
}

// Function to evaluate the entered mathematical expression
function calculateResult() {
  try {
    let expression = inputFieldEl.value;
    let evaluatedResult = eval(expression);
    
    // Round division results to 2 decimal places
    if (expression.includes("/")) {
      evaluatedResult = parseFloat(evaluatedResult.toFixed(2));
    }

    inputFieldEl.value = evaluatedResult; // Display the calculated result
  } catch (error) {
    inputFieldEl.value = "Error"; // Display "Error" for invalid expressions
  }
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

// // Function to remove the last character from the input field
function backspace() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

// Event listeners for navigating to different pages after the page loads
document.addEventListener("DOMContentLoaded", function () {
  let homeButton = document.getElementById("homeButton");
  let aboutButton = document.getElementById("aboutButton");

    // Redirect to home page when home button is clicked
  homeButton.addEventListener("click", function () {
    window.location.href = "home.html"; 
  });

    // Redirect to about page when about button is clicked
  aboutButton.addEventListener("click", function () {
    window.location.href = "about.html"; 
  });
});
