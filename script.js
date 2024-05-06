const display = document.getElementById('display');
let arr = [];
let result = '';


function numberClick (num) {
  display.value += num;
  if (display.value.includes('+')) {
  arr = display.value.split('+');
  result = arr.reduce((a, b) => Number(a) + Number(b))
  }
  else if (display.value.includes('*')) {
  arr = display.value.split('*');
  result = arr.reduce((a, b) => Number(a) * Number(b))
  }

  else if (display.value.includes('-')) {
  arr = display.value.split('-');
  result = arr.reduce((a, b) => Number(a) - Number(b))
  }
  else if (display.value.includes('/')) {
  arr = display.value.split('/');
  result = arr.reduce((a, b) => Number(a) / Number(b))
  }
  

}

function calcButton () {
  display.value = result;
  
}


function back () {
  display.value = display.value.slice(0, -1);
}

function clearButton () {
  display.value = '';
  result = '';
  arr = [];
  
}    
function clearDisplay () {
  display.value = '';
  
}

/* keyboard numpad press (effects) */

const button1 = document.querySelector('.keyboardPress1');
const button2 = document.querySelector('.keyboardPress2');
const button3 = document.querySelector('.keyboardPress3');
const button4 = document.querySelector('.keyboardPress4');
const button5 = document.querySelector('.keyboardPress5');
const button6 = document.querySelector('.keyboardPress6');
const button7 = document.querySelector('.keyboardPress7');
const button8 = document.querySelector('.keyboardPress8');
const button9 = document.querySelector('.keyboardPress9');
const button0 = document.querySelector('.keyboardPress0');
const buttonPeriod = document.querySelector('.keyboardPeriod');
const buttonDivide = document.querySelector('.keyboardDivide');
const buttonEqual = document.querySelector('.keyboardEqual');
const buttonMinus = document.querySelector('.keyboardMinus');
const buttonTimes = document.querySelector('.keyboardTimes');
const buttonPlus = document.querySelector('.keyboardPlus');
const backSpacebtn = document.querySelector('.backSpace');

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    buttonEqual.classList.add('ispressed');
    delay(buttonEqual);
    calcButton();
  }
  if (event.key === '+') {
    buttonPlus.classList.add('ispressed');
    delay(buttonPlus);
    numberClick('+');
  }
  if (event.key === '-') {
    buttonMinus.classList.add('ispressed');
    delay(buttonMinus);
    numberClick('-');
  }
  if (event.key === '*') {
    buttonTimes.classList.add('ispressed');
    delay(buttonTimes);
    numberClick('*');
  }
  if (event.key === '/') {
    buttonDivide.classList.add('ispressed');
    delay(buttonDivide);
    numberClick('/');
  }
  if (event.key === 'Backspace') {
    backSpacebtn.classList.add('ispressed');
    delay(backSpacebtn);
    back ();
  }
  if (event.key === '1') {
    button1.classList.add('ispressed');
    delay(button1);
    numberClick('1');
  }
  else if (event.key === '2') {
    button2.classList.add('ispressed');
    delay(button2);
    numberClick('2');
  }
  else if (event.key === '3') {
    button3.classList.add('ispressed');
    delay(button3);
    numberClick('3');
  }
  else if (event.key === '4') {
    button4.classList.add('ispressed');
    delay(button4);
    numberClick('4');
  }
  else if (event.key === '5') {
    button5.classList.add('ispressed');
    delay(button5);
    numberClick('5');
  }
  else if (event.key === '6') {
    button6.classList.add('ispressed');
    delay(button6);
    numberClick('6');
  }
  else if (event.key === '7') {
    button7.classList.add('ispressed');
    delay(button7);
    numberClick('7');
  }
  else if (event.key === '8') {
    button8.classList.add('ispressed');
    delay(button8);
    numberClick('8');
  }
  else if (event.key === '9') {
    button9.classList.add('ispressed');
    delay(button9);
    numberClick('9');
  }
  else if (event.key === '0') {
    button0.classList.add('ispressed');
    delay(button0);
    numberClick('0');
  }
  else if (event.key === '.') {
    buttonPeriod.classList.add('ispressed');
    delay(buttonPeriod);
    numberClick('.');
  }
})


const delay = (param) => {
  setTimeout(() => {
    const buttons = param;
    buttons.classList.remove('ispressed')
    },70)
}
