let displayValue = '';
let memoryValue = 0;

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculatePercentage() {
  try {
    let result = eval(displayValue) / 100;
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateSquareRoot() {
  try {
    let result = Math.sqrt(eval(displayValue));
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateExponent() {
  try {
    let result = eval(displayValue) ** 2; // Change 2 to any desired exponent
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateSin() {
  try {
    let result = Math.sin(eval(displayValue));
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateCos() {
  try {
    let result = Math.cos(eval(displayValue));
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateTan() {
  try {
    let result = Math.tan(eval(displayValue));
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function calculateFactorial() {
  try {
    let num = parseInt(displayValue);
    let result = factorial(num);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    displayValue = '';
  }
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function calculateMemoryStore() {
  memoryValue = eval(displayValue);
  displayValue = '';
}

function calculateMemoryRecall() {
  displayValue += memoryValue;
  document.getElementById('display').value = displayValue;
}

function calculateMemoryClear() {
  memoryValue = 0;
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}
