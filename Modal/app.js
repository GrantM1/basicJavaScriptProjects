// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modBtn = document.querySelector('.modal-btn');
const modOvr = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalFunction = () => {
 // modOvr.classList.contains('open-modal')
 //  ? modOvr.classList.remove('open-modal')
 //  : modOvr.classList.add('open-modal');
 modOvr.classList.toggle('open-modal');
};

modBtn.addEventListener('click', modalFunction);
closeBtn.addEventListener('click', modalFunction);
