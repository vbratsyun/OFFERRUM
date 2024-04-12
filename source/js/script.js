// Открытие меню
const navMain = document.querySelector(".page-nav");
const navToggle = document.querySelector(".page-nav__toggle");

navMain.classList.remove("page-nav--nojs");

const onNavToggleClick = () => {
  if (navMain.classList.contains("page-nav--closed")) {
    navMain.classList.remove("page-nav--closed");
    navMain.classList.add("page-nav--opened");
  } else {
    navMain.classList.add("page-nav--closed");
    navMain.classList.remove("page-nav--opened");
  }
};
navToggle.addEventListener("click", onNavToggleClick);


// Открытие модального окна
const promoButton = document.querySelector('.promo__button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal__close-button');

const onPromoButtonClick = () => {
  modal.classList.add('modal-container--opened');
  promoButton.removeEventListener('click', onPromoButtonClick);
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

const onModalCloseButtonClick = () => {
  modal.classList.remove('modal-container--opened');
  modalCloseButton.removeEventListener('click', onModalCloseButtonClick);
  promoButton.addEventListener('click', onPromoButtonClick);
}

promoButton.addEventListener('click', onPromoButtonClick);
modalCloseButton.addEventListener('click', onModalCloseButtonClick);
