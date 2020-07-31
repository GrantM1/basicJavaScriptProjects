const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
 slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function () {
 counter++;
 carousel();
});
prevBtn.addEventListener('click', function () {
 counter--;
 carousel();
});

function carousel() {
 // working with slides
 // if (counter === slides.length) {
 //  counter = 0;
 // }
 // if (counter < 0) {
 //  counter = slides.length - 1;
 // }

 // working with buttons
 counter < slides.length - 1
  ? (nextBtn.style.display = 'block')
  : (nextBtn.style.display = 'none');
 counter > 0
  ? (prevBtn.style.display = 'block')
  : (prevBtn.style.display = 'none');
 slides.forEach(function (slide) {
  slide.style.transform = `translateX(-${counter * 100}%)`;
 });
}
prevBtn.style.display = 'none';
