function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var result = num1 + num2;
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`;
  }
  
  function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var result = num1 - num2;
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`;
  }
  
  function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var result = num1 * num2;
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`;
  }
  
  function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    if (num2 === 0) {
      alert("Cannot divide by zero!");
      return;
    }
  
    var result = num1 / num2;
  
    var resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`;
  }
  