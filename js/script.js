const keys = document.querySelectorAll(".key");

// click Events
keys.forEach((item) => {
  item.addEventListener("click", () => input(item.innerText));
});

// Display handler
function displayHandler() {
  const display = document.getElementById("display");
  // Auto Scroll function
  const autoScroll = () => (display.scrollLeft = display.scrollWidth);
  // Conditions check

  if (display.innerText.length <= 9) {
    display.style.fontSize = "90px";
    display.style.color = "green";
  } else if (display.innerText.length <= 17) {
    display.style.fontSize = "50px";
    display.style.color = "green";
  } else {
    display.style.color = "red";
  }
  autoScroll();
}

// Main function
function input(key) {
  const display = document.getElementById("display");

  // if Statment
  if (display.innerText == "" && key != "C") {
    alert("Please Turn On Calculator");
  } else if (key == "C") {
    display.innerText = "0";
  } else if (key == "Off") {
    display.innerText = "";
  } else if (key == "back") {
    display.innerText.length == 1
      ? (display.innerText = "0")
      : (display.innerText = display.innerText.slice(
          0,
          display.innerText.length - 1
        ));
  } else {
    if (key == "0" && display.innerText == "0") {
      display.innerText = "0";
    } else if (key == "=") {
      display.innerText[0] == "="
        ? (display.innerText[0] = "")
        : process(display.innerText);
      process(display.innerText);
    } else {
      if (key == "%") {
        const display = document.getElementById("display");
        let a = display.innerText.slice(0, display.innerText.indexOf("÷"));
        let b = display.innerText.slice(
          display.innerText.indexOf("÷") + 1,
          display.innerText.length
        );
        percentCalculator(a, b);
      } else {
        if (display.innerText == 0) {
          if (key == "x" || key == "÷") {
            display.innerText = "0";
          } else {
            display.innerText = key;
          }
        } else {
          if (
            display.innerText[display.innerText.length - 1] == "+" ||
            display.innerText[display.innerText.length - 1] == "-" ||
            display.innerText[display.innerText.length - 1] == "÷" ||
            display.innerText[display.innerText.length - 1] == "x" ||
            display.innerText[display.innerText.length - 1] == "√"
          ) {
            if (
              key == "+" ||
              key == "-" ||
              key == "x" ||
              key == "÷" ||
              key == "√"
            ) {
            } else {
              display.innerText += key;
            }
          } else {
            display.innerText += key;
          }
        }
      }
    }
  }
  displayHandler();
}

// Process values
function process(value) {
  const display = document.getElementById("display");
  if (value[0] == "√") {
    display.innerText = Math.sqrt(+value.slice(1, value.length));
  } else {
    let filter = "";
    filter = value.replaceAll("÷", "/");
    filter = filter.replaceAll("x", "*");
    display.innerText = eval(filter);
  }
  displayHandler();
}

function percentCalculator(a, b) {
  const display = document.getElementById("display");
  display.innerText = `${(a * 100) / b}`;
}

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "0":
      input(e.key);
      break;
    case "1":
      input(e.key);
      break;
    case "2":
      input(e.key);
      break;
    case "3":
      input(e.key);
      break;
    case "4":
      input(e.key);
      break;
    case "5":
      input(e.key);
      break;
    case "6":
      input(e.key);
      break;
    case "7":
      input(e.key);
      break;
    case "8":
      input(e.key);
      break;
    case "9":
      input(e.key);
      break;
    case "+":
      input(e.key);
      break;
    case "-":
      input(e.key);
      break;
    case "*":
      input("x");
      break;
    case "/":
      input("÷");
      break;
    case "%":
      input(e.key);
      break;
    case "Control":
      input("C");
      break;
    case "s":
      input("√");
      break;
    case "S":
      input("√");
      break;
    case "Alt":
      input("Off");
      break;
    case "Enter":
      input("=");
      break;
    case "Backspace":
      input("back");
      break;
    default:
      break;
  }
});
