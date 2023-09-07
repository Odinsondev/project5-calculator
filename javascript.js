
// Global variables to be used in later functions

let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

// Operation functions

function add() {
  const resultAdd = Number(firstNumber) + Number(secondNumber);
  const resultRound = Math.round((resultAdd + Number.EPSILON) * 1000) / 1000;
  result = resultRound;
}

function subtract() {
  const resultSubtract = Number(firstNumber) - Number(secondNumber);
  const resultRound = Math.round((resultSubtract + Number.EPSILON) * 1000) / 1000;
  result = resultRound;
}

function multiply() {
  const resultMultiply = Number(firstNumber) * Number(secondNumber);
  const resultRound = Math.round((resultMultiply + Number.EPSILON) * 1000) / 1000;
  result = resultRound;
}

function divide() {
  const resultDivide = Number(firstNumber) / Number(secondNumber);
  const resultRound = Math.round((resultDivide + Number.EPSILON) * 1000) / 1000;
  result = resultRound;
}

function percent () {   // Functions like Windows calculator
  if (operator == "+") {   // Adds X percentage of firstNumber
    secondNumber = secondNumber.slice(0, secondNumber.length -1);   // Remove % sign
    secondNumber = firstNumber * (secondNumber/100);
    secondNumber = Math.round((secondNumber + Number.EPSILON) * 1000) / 1000;   // Removes floating number issue

    const resultAdd = Number(firstNumber) + Number(secondNumber);
    const resultRound = Math.round((resultAdd + Number.EPSILON) * 1000) / 1000;
    result = resultRound;

  } else if (operator == "-") {   // Subtracts X percentage of firstNumber
    secondNumber = secondNumber.slice(0, secondNumber.length -1);
    secondNumber = firstNumber * (secondNumber/100);
    secondNumber = Math.round((secondNumber + Number.EPSILON) * 1000) / 1000;

    const resultSubtract = Number(firstNumber) - Number(secondNumber);
    const resultRound = Math.round((resultSubtract + Number.EPSILON) * 1000) / 1000;
    result = resultRound;

  } else if (operator == "\xd7") {   // Result is the percentage of firstNumber
    secondNumber = secondNumber.slice(0, secondNumber.length -1);
    secondNumber = secondNumber/100;
    secondNumber = Math.round((secondNumber + Number.EPSILON) * 1000) / 1000;

    const resultMultiply = Number(firstNumber) * Number(secondNumber);
    const resultRound = Math.round((resultMultiply + Number.EPSILON) * 1000) / 1000;
    result = resultRound;

  } else if (operator == "\xf7") {   // Same functionality as Windows calculator
    secondNumber = secondNumber.slice(0, secondNumber.length -1);
    secondNumber = secondNumber/100;
    secondNumber = Math.round((secondNumber + Number.EPSILON) * 1000) / 1000;

    const resultDivide = Number(firstNumber) / Number(secondNumber);
    const resultRound = Math.round((resultDivide + Number.EPSILON) * 1000) / 1000;
    result = resultRound;
  } else {}
}

// Eventlisteners for buttons

function buttons() {
  const button0 = document.getElementById('0');
  const button1 = document.getElementById('1');
  const button2 = document.getElementById('2');
  const button3 = document.getElementById('3');
  const button4 = document.getElementById('4');
  const button5 = document.getElementById('5');
  const button6 = document.getElementById('6');
  const button7 = document.getElementById('7');
  const button8 = document.getElementById('8');
  const button9 = document.getElementById('9');
  const buttonDecimal = document.getElementById('decimal');
  const buttonAdd = document.getElementById('add');
  const buttonSubtract = document.getElementById('subtract');
  const buttonMultiply = document.getElementById('multiply');
  const buttonDivide = document.getElementById('divide');
  const buttonPercent = document.getElementById('percent');
  const buttonOperate = document.getElementById('operate');
  const buttonClear = document.getElementById('clear');
  const buttonDelete = document.getElementById('delete');

  button0.addEventListener('click', runButton0);
  button1.addEventListener('click', runButton1);
  button2.addEventListener('click', runButton2);
  button3.addEventListener('click', runButton3);
  button4.addEventListener('click', runButton4);
  button5.addEventListener('click', runButton5);
  button6.addEventListener('click', runButton6);
  button7.addEventListener('click', runButton7);
  button8.addEventListener('click', runButton8);
  button9.addEventListener('click', runButton9);
  buttonDecimal.addEventListener('click', runButtonDecimal);
  buttonAdd.addEventListener('click', runButtonAdd);
  buttonSubtract.addEventListener('click', runButtonSubtract);
  buttonMultiply.addEventListener('click', runButtonMultiply);
  buttonDivide.addEventListener('click', runButtonDivide);
  buttonPercent.addEventListener('click', runButtonPercent);
  buttonOperate.addEventListener('click', runButtonOperate);
  buttonClear.addEventListener('click', runButtonClear);
  buttonDelete.addEventListener('click', runButtonDelete);

  button0.addEventListener('mousedown', playSound);
  button1.addEventListener('mousedown', playSound);
  button2.addEventListener('mousedown', playSound);
  button3.addEventListener('mousedown', playSound);
  button4.addEventListener('mousedown', playSound);
  button5.addEventListener('mousedown', playSound);
  button6.addEventListener('mousedown', playSound);
  button7.addEventListener('mousedown', playSound);
  button8.addEventListener('mousedown', playSound);
  button9.addEventListener('mousedown', playSound);
  buttonDecimal.addEventListener('mousedown', playSound);
  buttonAdd.addEventListener('mousedown', playSound);
  buttonSubtract.addEventListener('mousedown', playSound);
  buttonMultiply.addEventListener('mousedown', playSound);
  buttonDivide.addEventListener('mousedown', playSound);
  buttonPercent.addEventListener('mousedown', playSound);
  buttonOperate.addEventListener('mousedown', playSound);
  buttonClear.addEventListener('mousedown', playSound);
  buttonDelete.addEventListener('mousedown', playSound);


}
buttons();

function playSound() {
  const sound = new Audio('./sounds/click.mp3');
  sound.play();
}

// Individual button functions

function runButton0() {
  if (operator == "" && firstNumber != "0") {   //Disables firstNumber starting with 00
    firstNumber = `${firstNumber}` + "0";
    updateScreen();
  } else if (operator != "" && secondNumber != "0") {   //Disables secondNumber starting with 00
    secondNumber = `${secondNumber}` + "0";
    updateScreen3();
  } else {}
}

function runButton1() {
  if (operator == "" && firstNumber == "0") {   //Disables numbers like 01
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "1";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "1";
    updateScreen3();
  }
}

function runButton2() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "2";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "2";
    updateScreen3();
  }
}

function runButton3() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "3";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "3";
    updateScreen3();
  }
}

function runButton4() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "4";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "4";
    updateScreen3();
  }
}

function runButton5() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "5";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "5";
    updateScreen3();
  }
}

function runButton6() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "6";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "6";
    updateScreen3();
  }
}

function runButton7() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "7";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "7";
    updateScreen3();
  }
}

function runButton8() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "8";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "8";
    updateScreen3();
  }
}

function runButton9() {
  if (operator == "" && firstNumber == "0") {
    firstNumber = "";
  } else if (secondNumber == "0") {
    secondNumber = "";
  } else {}

  if (operator == "") {
    firstNumber = `${firstNumber}` + "9";
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "9";
    updateScreen3();
  }
}

function runButtonDecimal() {
  if (operator == "" && firstNumber == "00") {   //Disables numbers like 00.
    firstNumber = "0";
  } else if (secondNumber == "00") {
    secondNumber = "0";
  } else {}

  if (operator == "" && !firstNumber == "" &&
  !firstNumber.includes(".")) {   //Disables numbers like 0.. or 0.1.1 or .1
    firstNumber = `${firstNumber}` + ".";
    updateScreen();
  } else if (operator != "" && !secondNumber == "" && !secondNumber.includes(".")) {
    secondNumber = `${secondNumber}` + ".";
    updateScreen3();
  } else {}
}

function runButtonAdd() {
  if (operator == "" && firstNumber != "") {   // Run normal code if making first calculation
    operator = "+";
    updateScreen2();
  } else if (firstNumber != "" && secondNumber != "") {   // Run if making consecutive operations without using "="
    runButtonOperate();
    operator = "+";   // Added operator so next input numbers would add to secondNumber
  } else {}             // Not logging this operator to console
}

function runButtonSubtract() {
  if (operator == "" && firstNumber != "") {
    operator = "-";
    updateScreen2();
  } else if (firstNumber != "" && secondNumber != "") {
    runButtonOperate();
    operator = "-";
  } else {}
}

function runButtonMultiply() {
  if (operator == "" && firstNumber != "") {
    operator = "\xd7";
    updateScreen2();
  } else if (firstNumber != "" && secondNumber != "") {
    runButtonOperate();
    operator = "\xd7";
  } else {}
}

function runButtonDivide() {
  if (operator == "" && firstNumber != "") {
    operator = "\xf7";
    updateScreen2();
  } else if (firstNumber != "" && secondNumber != "") {
    runButtonOperate();
    operator = "\xf7";
  } else {}
}

function runButtonPercent() {
  if (secondNumber != "" && !secondNumber.includes("%")) {   // Only run if other values have been input
    secondNumber = `${secondNumber}` + "%";
    updateScreen3();
  } else {}
}

function runButtonOperate() {
  if (operator == "+" && !secondNumber.includes("%")) {   // Doesn't run if % is input
    add();
    updateScreenResult();
    firstNumber = result.toString();   // Updates firstNumber to Result for future operations
    operator = "";                     // Added toString to avoid potential bugs
    secondNumber = "";
  } else if (operator == "-" && !secondNumber.includes("%")) {
    subtract();
    updateScreenResult();
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
  } else if (operator == "\xd7" && !secondNumber.includes("%")) {
    multiply();
    updateScreenResult();
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
  } else if (operator == "\xf7" && !secondNumber.includes("%")) {
    if (secondNumber == 0) {
      result = "58008";   // ERROR message when dividing by 0
      updateScreenResult();
      firstNumber = result.toString();
      operator = "";
      secondNumber = "";
    } else {
      divide();
      updateScreenResult();
      firstNumber = result.toString();
      operator = "";
      secondNumber = "";
    }
  } else if (secondNumber.includes("%")) {
    percent();
    updateScreenResult();
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
  } else {}

  console.log(firstNumber)   // Show values after operating
  console.log(operator)
  console.log(secondNumber)
}

function runButtonClear() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  result = "";
  updateScreenClear();
}

function runButtonDelete() {
  if (operator == "") {
    firstNumber = firstNumber.slice(0, firstNumber.length -1);
    updateScreen();
  } else {
    secondNumber = secondNumber.slice(0, secondNumber.length -1);
    updateScreen3();
  }
}

// Screen functions

function updateScreen() {
  const screenBottom = document.getElementById('screen-bottom');
  const bottomText = document.getElementById('bottom-text');
  bottomText.textContent = firstNumber;
  screenBottom.appendChild(bottomText);

  console.log(firstNumber)
  console.log(operator)
  console.log(secondNumber)
}

function updateScreen2() {
  const screenTop = document.getElementById('screen-top');
  const topText = document.getElementById('top-text');
  topText.textContent = `${firstNumber}` + ` ${operator}`;
  screenTop.appendChild(topText);

  console.log(firstNumber)
  console.log(operator)
  console.log(secondNumber)
}

function updateScreen3() {
  const screenBottom = document.getElementById('screen-bottom');
  const bottomText = document.getElementById('bottom-text');
  bottomText.textContent = secondNumber;
  screenBottom.appendChild(bottomText);

  console.log(firstNumber)
  console.log(operator)
  console.log(secondNumber)
}

function updateScreenResult() {
  const screenTop = document.getElementById('screen-top');
  const topText = document.getElementById('top-text');
  topText.textContent = `${firstNumber}` + ` ${operator}` + ` ${secondNumber}` + " =";
  screenTop.appendChild(topText);

  const screenBottom = document.getElementById('screen-bottom');
  const bottomText = document.getElementById('bottom-text');
  bottomText.textContent = result;
  screenBottom.appendChild(bottomText);

  console.log(firstNumber)
  console.log(operator)
  console.log(secondNumber)
}

function updateScreenClear() {
  const screenTop = document.getElementById('screen-top');
  const topText = document.getElementById('top-text');
  topText.textContent = "";
  screenTop.appendChild(topText);

  const screenBottom = document.getElementById('screen-bottom');
  const bottomText = document.getElementById('bottom-text');
  bottomText.textContent = "";
  screenBottom.appendChild(bottomText);

  console.log(firstNumber)
  console.log(operator)
  console.log(secondNumber)
}

//feat:
//keyboard support

//bug:
//can't change operator during calculation