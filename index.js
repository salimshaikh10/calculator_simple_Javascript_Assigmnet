// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let string = '';
const buttons = document.querySelectorAll('.button');
Array.from(buttons).map((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
