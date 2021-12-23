let display = document.querySelector("#display");
let digitsBtns = document.querySelectorAll(".digits input");
let operBtns = document.querySelectorAll(".operations .operBtn");
let equalBtn = document.querySelector("#equal");
let clearBtn = document.querySelector("#clearBtn");
let clearAllBtn = document.querySelector("#clearAllBtn");
let plsMnsBtn = document.querySelector("#plsMnsBtn");
let decimalPoint = document.querySelector("#decimalPoint");
let currentValue;
let prevValue;
let operation;

digitsBtns.forEach((item) => item.addEventListener("click", displayDigits));
operBtns.forEach((item) => item.addEventListener("click", operateDigit));
equalBtn.addEventListener("click", equalOpern);
clearBtn.addEventListener("click", clearPrev);
clearAllBtn.addEventListener("click", clearAll);
plsMnsBtn.addEventListener("click", plsMns);
decimalPoint.addEventListener("click", decimal);

function displayDigits(e) {
  let displayTextContent = display.textContent;
  let regExp = /.\d\d\d/;
  if (displayTextContent.length == 8) {
    alert("размер значения превышает 8 символов");
    return;
  }
  if(regExp.test(displayTextContent)){
    alert('больше трех цифр после точки - нельзя!');
    return;
  }
  if (display.textContent === "0") {
    display.textContent = "";
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
      result = round1000(result);
      operation = "";
      break;
    case "-":
      result = +prevValue - +currentValue;
      result = round1000(result);
      operation = "";
      break;
    case "/":
      result = +prevValue / +currentValue;
      result = round1000(result);
      operation = "";
      break;
    default:
      result = "";
      break;
  }
  if (result > 99999999) {
    display.textContent = "ERR";
    currentValue = prevValue = "";
  } else {
    display.textContent = result;
  }

  prevValue = currentValue;
  currentValue = result;
  console.log("currentValue *-/", currentValue);

  function round1000(res){
    return Math.round(res*1000)/1000;
  }
}

function clearPrev(e) {
  currentValue = prevValue || "";
  prevValue = "";
  display.textContent = currentValue;
  console.log("prevValue ", prevValue, "currentValue", currentValue);
}

function clearAll(e) {
  currentValue = prevValue = "";
  display.textContent = 0;
}

function plsMns() {
  if (currentValue !== 0) {
    currentValue = -currentValue;
    display.textContent = currentValue;
    console.log("currentValue +/-", currentValue);
  }
}

function decimal(e) {
  display.textContent += e.target.value;
  console.log('length: ',display.textContent.length)
}
