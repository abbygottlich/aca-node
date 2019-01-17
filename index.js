const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculator = () => {
  rl.question("", answer => {
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
    calculator();
  });
};
calculator();

// calculator functions
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

// // boolean functions
// function isGreaterThan(userInput) {
//   if (userInput.keyCode === 13) {
//     let equation = userInput.split(" ");
//     if (equation[1] === ">" && parseInt(equation[0]) > parseInt(equation[2])) {
//       return true;
//       console.log(true);
//     } else {
//       return false;
//       console.log(false);
//     }
//   }
// }

// function isLessThan(userInput) {
//   if (userInput.keyCode === 13) {
//     let equation = userInput.split(" ");
//     if (equation[1] === "<" && parseInt(equation[0]) < parseInt(equation[2])) {
//       return true;
//       console.log(true);
//     } else {
//       return false;
//       console.log(false);
//     }
//   }
// }

// function isEqualTo(userInput) {
//   if (userInput.keyCode === 13) {
//     let equation = userInput.split(" ");
//     if (
//       equation[1] === "=" &&
//       parseInt(equation[0]) === parseInt(equation[2])
//     ) {
//       return true;
//       console.log(true);
//     } else {
//       return false;
//       console.log(false);
//     }
//   }
// }
