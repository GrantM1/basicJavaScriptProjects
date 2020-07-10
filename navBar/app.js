// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
 // console.log(links.classList);
 // console.log(links.classList.contains('links'));

 // classical if else statment
 // if (links.classList.contains('show-links')) {
 //  links.classList.remove('show-links');
 // } else {
 //  links.classList.add('show-links');
 // }

 // Ternary operator

 // links.classList.contains('show-links')
 //  ? links.classList.remove('show-links')
 //  : links.classList.add('show-links');

 // toggleMethod

 links.classList.toggle('show-links');
});
