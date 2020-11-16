function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function divide(a, b) {
  return +a / +b;
}

function multiply(a, b) {
  return +a * +b;
}

function operate(op, num1, num2) {
  if (op === "+") {
    return add(num1, num2);
  }
  if (op === "-") {
    return subtract(num1, num2);
  }
  if (op === "/") {
    return divide(num1, num2);
  }
  if (op === "x") {
    return multiply(num1, num2);
  }
}
let item1 = "";
let item2 = "";
let operator = "";
let runningAnswer = "0";

function update(value) {
  if (value === "+" || value === "-" || value === "x" || value === "/") {
    operator = value;
    let display = document.getElementById("display");
    display.textContent = operator;
    if (item2 != "") {
      item1 = runningAnswer;
      item2 = "";
    }
  } else {
    if (operator === "") {
      item1 += value;
      runningAnswer = item1;
      display();
    } else {
      item2 += value;
      let display = document.getElementById("display");
      display.textContent = value;
      runningAnswer = operate(operator, item1, item2);
    }
  }
}

function display() {
  let display = document.getElementById("display");
  display.textContent = runningAnswer;
}

function reset() {
  let display = document.getElementById("display");
  display.textContent = "0";
  operator = "";
  item1 = "";
  item2 = "";
}
