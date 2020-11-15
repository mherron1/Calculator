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
    if (item2 != "") {
      item1 = runningAnswer;
      item2 = "";
      console.log(operator);
    }
  } else {
    if (operator === "") {
      item1 += value;
      console.log(item1);
      runningAnswer = item1;
    } else {
      item2 += value;
      console.log(item2);
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
  console.log(item1 + " " + operator + "" + item2);
}
