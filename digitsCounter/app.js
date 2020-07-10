// set initional count
let count = 0;

// selet valu and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const increase = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');

btns.forEach((button) => {
 button.addEventListener('click', (e) => {
  const styles = e.currentTarget.classList;
  if (styles.contains('increase')) {
   count++;
  } else if (styles.contains('decrease')) {
   count--;
  } else {
   count = 0;
  }

  if (count > 0) {
   value.style.color = 'green';
  }
  if (count < 0) {
   value.style.color = 'red';
  }
  if (count == 0) {
   value.style.color = 'black';
  }
  value.textContent = count;
 });
});
