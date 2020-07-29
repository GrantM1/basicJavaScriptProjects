// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** FUNCTIONS **********
let addItem = (e) => {
 e.preventDefault();
 const value = grocery.value;
 // IMPORTANT
 // code below is not apropriate to generate random id value in big projects, better to use, import proper applications.
 const id = new Date().getTime().toString(); // this code is ok for learning purpouses, it is generates random millisecond number and corvert it to strong then assing to ID.
 // IMPORTANT
 if (value && !editFlag) {
  createListItem(id, value);
  displayAlert('item added to the list', 'success');
  // show container
  container.classList.add('show-container');
  // add to local storage
  addToLocalStorage(id, value);
  // set back to default
  setBackToDefault();
 } else if (value && editFlag) {
  editElement.innerHTML = value;
  displayAlert('value changed', 'success');
  // edit local storage
  editLocalStorage(editID, value);
  setBackToDefault();
 } else {
  displayAlert('please enter value', 'danger');
 }
};
// display alert
let displayAlert = (text, action) => {
 alert.textContent = text;
 alert.classList.add(`alert-${action}`);
 // remove alert
 setTimeout(() => {
  alert.textContent = '';
  alert.classList.remove(`alert-${action}`);
 }, 1000);
};
// clear items
let clearItems = () => {
 const items = document.querySelectorAll('.grocery-item');
 if (items.length > 0) {
  items.forEach((item) => {
   list.removeChild(item);
  });
 }
 container.classList.remove('show-container');
 displayAlert('empty list', 'danger');
 setBackToDefault();
 localStorage.removeItem('list');
};

// delete item function
let deleteItem = (e) => {
 const element = e.currentTarget.parentElement.parentElement;
 const id = element.dataset.id;
 list.removeChild(element);
 if (list.children.length === 0) {
  container.classList.remove('show-container');
 }
 displayAlert('item removed', 'danger');
 setBackToDefault();
 // remove from local storage
 removeFromLocalStorage(id);
};
// edit item function
let editItem = (e) => {
 const element = e.currentTarget.parentElement.parentElement;
 // set edit item
 editElement = e.currentTarget.parentElement.previousElementSibling;
 // set form value
 grocery.value = editElement.innerHTML;
 editFlag = true;
 editID = element.dataset.id;
 submitBtn.textContent = 'edit';
};
// set back to default
let setBackToDefault = () => {
 grocery.value = '';
 editFlag = false;
 editID = '';
 submitBtn.textContent = 'submit';
};

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);
//  load items
window.addEventListener('DOMContentLoaded', setupItems);
// ****** LOCAL STORAGE **********
let addToLocalStorage = (id, value) => {
 const grocery = { id, value };
 let items = getLocalStorage();
 console.log(items);
 items.push(grocery);
 localStorage.setItem('list', JSON.stringify(items));
};
let removeFromLocalStorage = (id) => {
 let items = getLocalStorage();
 items.filter((item) => {
  if (item.id !== id) {
   return item;
  }
 });
 localStorage.setItem('list', JSON.stringify(items));
};

let editLocalStorage = (id, value) => {
 let items = getLocalStorage();
 items = items.map((item) => {
  if (item.id === id) {
   item.value = value;
  }
  return item;
 });
 localStorage.setItem('list', JSON.stringify(items));
};

let getLocalStorage = () => {
 return localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list'))
  : [];
};
// localStorage API
// setItem, getItem, removeItem, save to string methods
// ****** SETUP ITEMS **********
function setupItems() {
 let items = getLocalStorage();
 if (items.length > 0) {
  items.forEach(function (item) {
   createListItem(item.id, item.value);
  });
  container.classList.add('show-container');
 }
}
function createListItem(id, value) {
 const element = document.createElement('article');
 // add class
 element.classList.add('grocery-item');
 // add id
 const attr = document.createAttribute('data-id');
 attr.value = id;
 element.setAttributeNode(attr);
 element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
     <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
     </button>
     <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
     </button>
    </div>`;
 const deleteBtn = element.querySelector('.delete-btn');
 const editBtn = element.querySelector('.edit-btn');

 deleteBtn.addEventListener('click', deleteItem);
 editBtn.addEventListener('click', editItem);
 // append child
 list.appendChild(element);
}
