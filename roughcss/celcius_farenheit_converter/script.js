function convert() {
    // Get the value entered in the input field
    var fahrenheit = document.getElementById("Fahrenheitinput").value;
  
    // Convert it to Fahrenheit
    var celsius = (fahrenheit -32) *5/9;
  
    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.textContent = `${fahrenheit} degrees Fahrenheit is equal to ${celsius.toFixed(2)} degrees Celsius.`;
  }
  