function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
  
    var simpleInterest = (principal * rate * time) / 100;
  
    var simpleInterestResultElement = document.getElementById("simpleInterestResult");
    simpleInterestResultElement.textContent = `Simple Interest: rs${simpleInterest.toFixed(2)}`;
  }
  
  function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);
  
    var compoundInterest = principal * (Math.pow((1 + rate / 100), time)) - principal;
  
    var compoundInterestResultElement = document.getElementById("compoundInterestResult");
    compoundInterestResultElement.textContent = `Compound Interest: rs${compoundInterest.toFixed(2)}`;
  }
  