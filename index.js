const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userInput = process.stdin;

// calculator functions
function addition(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === "+") {
      console.log(parseInt(equation[0]) + parseInt(equation[2]));
    }
  }
}

function subtraction(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === "-") {
      console.log(parseInt(equation[0]) - parseInt(equation[2]));
    }
  }
}

function multiplication(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === "*") {
      console.log(parseInt(equation[0]) * parseInt(equation[2]));
    }
  }
}

function division(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === "/") {
      console.log(parseInt(equation[0]) / parseInt(equation[2]));
    }
  }
}

// boolean functions
function isGreaterThan(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === ">" && parseInt(equation[0]) > parseInt(equation[2])) {
      return true;
      console.log(true);
    } else {
      return false;
      console.log(false);
    }
  }
}

function isLessThan(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (equation[1] === "<" && parseInt(equation[0]) < parseInt(equation[2])) {
      return true;
      console.log(true);
    } else {
      return false;
      console.log(false);
    }
  }
}

function isEqualTo(userInput) {
  if (userInput.keyCode === 13) {
    let equation = userInput.split(" ");
    if (
      equation[1] === "=" &&
      parseInt(equation[0]) === parseInt(equation[2])
    ) {
      return true;
      console.log(true);
    } else {
      return false;
      console.log(false);
    }
  }
}
