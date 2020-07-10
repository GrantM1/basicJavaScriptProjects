const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
 // console.log(links.classList.contains('links'));

 // classical if else statment
 // if (sideBar.classList.contains('show-sidebar')) {
 //  sideBar.classList.remove('show-sidebar');
 // } else {
 //  sideBar.classList.add('show-sidebar');
 // }

 // Ternary operator

 sideBar.classList.contains('show-sidebar')
  ? sideBar.classList.remove('show-sidebar')
  : sideBar.classList.add('show-sidebar');

 // toggleMethod

 // sideBar.classList.toggle('show-sidebar');
 // console.log(sideBar.classList);
});

closeBtn.addEventListener('click', () => {
 // sideBar.classList.remove('show-sidebar');
 sideBar.classList.toggle('show-sidebar');
 // console.log(sideBar.classList);
});
