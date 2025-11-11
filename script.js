
  let string = "";
  let buttons = document.querySelectorAll('.button');
  Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
    });
  });
