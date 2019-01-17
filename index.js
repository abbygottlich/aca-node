// readline setup
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// mother of all functions
const mother = () => {
  rl.question("", answer => {
    let formattedAnswer = answer.split(" ");
    if (formattedAnswer[1] === "+" || "-" || "*" || "/") {
      calculator(answer);
    } else if (formattedAnswer[1] === ">" || "<" || "=") {
      isComparisonAccurate(answer);
    } else if (formattedAnswer[2] === "=") {
      createVariable(answer);
    }
    mother();
  });
};

// mother calculator function
const calculator = answer => {
  let formattedAnswer = answer.split(" ");
  if (formattedAnswer[1] === "+") {
    addition(formattedAnswer);
  } else if (formattedAnswer[1] === "-") {
    subtraction(formattedAnswer);
  } else if (formattedAnswer[1] === "*") {
    multiplication(formattedAnswer);
  } else if (formattedAnswer[1] === "/") {
    division(formattedAnswer);
  }
};

// baby calculator functions
function addition(formattedAnswer) {
  console.log(parseInt(formattedAnswer[0]) + parseInt(formattedAnswer[2]));
}

function subtraction(formattedAnswer) {
  console.log(parseInt(formattedAnswer[0]) - parseInt(formattedAnswer[2]));
}

function multiplication(formattedAnswer) {
  console.log(parseInt(formattedAnswer[0]) * parseInt(formattedAnswer[2]));
}

function division(formattedAnswer) {
  console.log(parseInt(formattedAnswer[0]) / parseInt(formattedAnswer[2]));
}

// mother boolean function
const isComparisonAccurate = answer => {
  let formattedAnswer = answer.split(" ");
  if (formattedAnswer[1] === ">") {
    isGreaterThan(formattedAnswer);
  } else if (formattedAnswer[1] === "<") {
    isLessThan(formattedAnswer);
  } else if (formattedAnswer[1] === "=") {
    isEqualTo(formattedAnswer);
  }
};

// baby boolean functions
function isGreaterThan(formattedAnswer) {
  if (parseInt(formattedAnswer[0]) > parseInt(formattedAnswer[2])) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isLessThan(formattedAnswer) {
  if (parseInt(formattedAnswer[0]) < parseInt(formattedAnswer[2])) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function isEqualTo(formattedAnswer) {
  if (parseInt(formattedAnswer[0]) === parseInt(formattedAnswer[2])) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// variable function
const createVariable = answer => {
  let formattedAnswer = answer.split(" ");
  if (formattedAnswer[2] === "=") {
    createdVariables[formattedAnswer[1]] = formattedAnswer[3];
  }
  if (formattedAnswer.length === 1 && createdVariables[formattedAnswer[0]]) {
    console.log(createdVariables[formattedAnswer[0]]);
  }
};
const createdVariables = {};
mother();
