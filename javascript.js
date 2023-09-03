let firstNumber = "";
let operator = ""
let secondNumber = "";

function add() {
  const result = firstNumber + secondNumber;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function subtract() {
  const result = firstNumber - secondNumber;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function multiply() {
  const result = firstNumber * secondNumber;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function devide() {
  const result = firstNumber / secondNumber;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

console.log(add());
console.log(subtract());
console.log(multiply());
console.log(devide());

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


}
buttons()

function runButton0() {
  firstNumber = 0
  updateScreen()
}

function runButton1() {
  if (operator == "") {
    firstNumber = `${firstNumber}` + "1"
    updateScreen();
  } else {
    secondNumber = `${secondNumber}` + "1"
    updateScreen3();
  }
}

function runButton2() {
  firstNumber = 2
  updateScreen()
}

function runButton3() {
  firstNumber = 3
  updateScreen()
}

function runButton4() {
  firstNumber = 4
  updateScreen()
}

function runButton5() {
  firstNumber = 5
  updateScreen()
}

function runButton6() {
  firstNumber = 6
  updateScreen()
}

function runButton7() {
  firstNumber = 7
  updateScreen()
}

function runButton8() {
  firstNumber = 8
  updateScreen()
}

function runButton9() {
  firstNumber = 9
  updateScreen()
}

function runButtonAdd() {
  operator = "+"
  updateScreen2()
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

