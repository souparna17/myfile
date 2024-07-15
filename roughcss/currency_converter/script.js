function convert() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('from').value;
  
    // Replace with actual exchange rates or use an API to get live rates
    const exchangeRatesToINR = {
      USD: 74.52,
      EUR: 86.47,
      JPY: 0.68,
      GBP: 101.79,
      AUD: 55.56,
      CAD: 59.07
    };
  
    let result = amount * exchangeRatesToINR[fromCurrency];
    document.getElementById('result').textContent = result.toFixed(2) + ' INR';
  }
  