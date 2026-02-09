let string = "";
let memory = 0; // memory storage
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    let value = e.target.innerHTML;

    if (value == '=') {
      try {
        string = eval(string);
        if (!isFinite(string)) {
          document.querySelector('input').value = "cannot divide by zero";
          string = "";
        } else {
          document.querySelector('input').value = string;
        }
      } catch (error) {
        document.querySelector('input').value = "Error";
        string = "";
      }
    }
    else if (value == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (value == 'X') {
      string = string + '*'; // convert X to *
      document.querySelector('input').value = string;
    }
    else if (value == '/') {
      string = string + '/';
      document.querySelector('input').value = string;
    }
    else if (value == 'M+') {
      // Add current value to memory
      memory += Number(string);
      document.querySelector('input').value = "Memory: " + memory;
    }
    else if (value == 'M-') {
      // Subtract current value from memory
      memory -= Number(string);
      document.querySelector('input').value = "Memory: " + memory;
    }
    else if (value == '√') {
      // Square root of current value
      string = Math.sqrt(Number(string));
      document.querySelector('input').value = string;
    }
    else {
      string = string + value;
      document.querySelector('input').value = string;
    }
  });
});