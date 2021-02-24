const popup = document.querySelector('.popup-poisk');
const buttonSwitchPopup = document.querySelector('.btn-poisk');
const inputDataEntering = document.querySelector('.input-data-entering');
const inputDataEnding = document.querySelector('.input-data-ending');
const inputAdult = document.querySelector('.input-adult');
const inputChild = document.querySelector('.input-child');
const poiskForm = document.querySelector('.poisk-form')
const rectangleAdult = document.querySelector('.rectangle-adult');
const unionAdult = document.querySelector('.union-adult');
const rectangleChild = document.querySelector('.rectangle-child');
const unionChild = document.querySelector('.union-child');

let isStorageSuport = true;
let storageOne = '';
let storageTwo = ' ';

try {
  storageOne = localStorage.getItem('adult-people');
  storageTwo = localStorage.getItem('chilp-people');
} catch (err) {
  isStorageSuport = false;
};

buttonSwitchPopup.addEventListener('click', function() {
  popup.classList.toggle('popup--open');
});

rectangleAdult.addEventListener('click', function() {
  if (inputAdult.value > 1) {
    inputAdult.value--;
  } else {
    inputAdult.value = 1;
  } ;
});

unionAdult.addEventListener('click', function() {
  inputAdult.value++;
});

rectangleChild.addEventListener('click', function() {
  if (inputChild.value > 0) {
    inputChild.value--;
  } else {
    inputChild.value = 0;
  } ;
});

unionChild.addEventListener('click', function() {
  inputChild.value++;
});

poiskForm.addEventListener('submit', function(evt) {
  if (!inputDataEntering.value || !inputDataEnding.value || !inputAdult.value) {
    evt.preventDefault();
  } else {
    if (isStorageSuport){
      localStorage.setItem('adult-people', inputAdult.value);
      localStorage.setItem('child-people', inputChild.value);
    }
  }
});

