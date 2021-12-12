let display = document.querySelector("#display");
let digitsBtns = document.querySelectorAll(".digits input");
let operBtns = document.querySelectorAll(".operations .operBtn");
let equalBtn = document.querySelector("#equal");
let clearBtn = document.querySelector("#clearBtn");
let currentValue;
let prevValue;
let operation;

digitsBtns.forEach((item) => item.addEventListener("click", displayDigits));
operBtns.forEach((item) => item.addEventListener("click", operateDigit));
equalBtn.addEventListener("click", equalOpern);
clearBtn.addEventListener("click", clearPrev);

function displayDigits(e) {
  if (display.textContent.length == 8) {
    alert("размер значения превышает 8 символов");
    return;
  }

  console.log(e.target.value);
  display.textContent += e.target.value;
  currentValue = +display.textContent;
  console.log("currentValue", currentValue);
}

function operateDigit(e) {
  console.log(e.target.value);
  prevValue = currentValue;
  display.textContent = "";
  currentValue = "";
  operation = e.target.value;

}

function equalOpern(e) {
  let result;

  switch (operation) {
    case "+":
      result = +prevValue + +currentValue;
      operation = "";
      break;
    case "-":
      result = +prevValue - +currentValue;
      operation = "";
      break;
    case "/":
      result = +prevValue / +currentValue;
      operation = "";
      break;
    default:
      result = "";
      break;
  }

  display.textContent = result;
  prevValue = currentValue;
  currentValue = result;
}

function clearPrev(e) {
  display.textContent = "";
  currentValue = prevValue || "";
}
