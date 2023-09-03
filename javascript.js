let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

function add() {
  const resultAdd = Number(firstNumber) + Number(secondNumber);
  const resultRound = Math.round((resultAdd + Number.EPSILON) * 100) / 100;
  result = resultRound;
}

function subtract() {
  const resultSubtract = Number(firstNumber) - Number(secondNumber);
  const resultRound = Math.round((resultSubtract + Number.EPSILON) * 100) / 100;
  result = resultRound;
}

function multiply() {
  const resultMultiply = Number(firstNumber) * Number(secondNumber);
  const resultRound = Math.round((resultMultiply + Number.EPSILON) * 100) / 100;
  result = resultRound;
}

function devide() {
  const resultDevide = Number(firstNumber) / Number(secondNumber);
  const resultRound = Math.round((resultDevide + Number.EPSILON) * 100) / 100;
  result = resultRound;
}



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
  const buttonAdd = document.getElementById('add');
  const buttonSubtract = document.getElementById('subtract');
  const buttonMultiply = document.getElementById('multiply');
  const buttonDevide = document.getElementById('devide');
  const buttonOperate = document.getElementById('operate');



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
  buttonAdd.addEventListener('click', runButtonAdd);
  buttonSubtract.addEventListener('click', runButtonSubtract);
  buttonMultiply.addEventListener('click', runButtonMultiply);
  buttonDevide.addEventListener('click', runButtonDevide);
  buttonOperate.addEventListener('click', runButtonOperate);



}
buttons()

function runButton0() {
  if (operator == "" && firstNumber != "0") {   //Disables numbers starting with 00
    firstNumber = `${firstNumber}` + "0";
    updateScreen();
  } else if (operator != "" && secondNumber != "0") {   //Disables numbers starting with 00
    secondNumber = `${secondNumber}` + "0";
    updateScreen3();
  }
}

function runButton1() {
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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
  if (firstNumber == "0") {   //Disables numbers like 01
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

function runButtonAdd() {
  operator = "+";
  updateScreen2();
}

function runButtonSubtract() {
  operator = "-";
  updateScreen2();
}

function runButtonMultiply() {
  operator = "*";
  updateScreen2();
}

function runButtonDevide() {
  operator = "/";
  updateScreen2();
}

function runButtonOperate() {
  if (operator == "+") {
    add();
    updateScreenResult();
  } else if (operator =="-") {
    subtract();
    updateScreenResult();
  } else if (operator =="*") {
    multiply();
    updateScreenResult();
  } else if (operator =="/") {
    devide();
    updateScreenResult();
  } else {}
}



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

//known bugs:
//long numbers - fixed
//numbers starting with 00 or 01 etc - fixed

//missing features:
//function for %
//multiple operations