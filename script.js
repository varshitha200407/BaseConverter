function convert() {
  const numberInput = document.getElementById('number').value.trim();
  const base = parseInt(document.getElementById('base').value, 10);
  const resultsDiv = document.getElementById('results');

  // Reset previous results and hide
  resultsDiv.classList.remove('visible');
  document.getElementById('binary').textContent = '';
  document.getElementById('octal').textContent = '';
  document.getElementById('decimal').textContent = '';
  document.getElementById('hexadecimal').textContent = '';


  if (numberInput === '') {
    alert('Please enter a number.');
    return;
  }

  // Validate input for the selected base
  const validChars = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/
  };

  if (!validChars[base].test(numberInput)) {
    alert(`Invalid number for the selected base (${base}). Please use characters valid for that base.`);
    return;
  }

  const decimalValue = parseInt(numberInput, base);

  if (isNaN(decimalValue)) {
    alert('Invalid number. Please check your input.');
    return;
  }

  document.getElementById('binary').textContent = decimalValue.toString(2);
  document.getElementById('octal').textContent = decimalValue.toString(8);
  document.getElementById('decimal').textContent = decimalValue.toString(10);
  document.getElementById('hexadecimal').textContent = decimalValue.toString(16).toUpperCase();

  // Make results visible with animation
  resultsDiv.classList.add('visible');
}