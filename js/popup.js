const cardInfoLinkElement = document.querySelector('.card-info__link-to-shop');
const modalPopupElement = document.querySelector('.modal');
const modalButtonCloseElement = modalPopupElement.querySelector('.modal__button-close');

cardInfoLinkElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalPopupElement.classList.add('modal-show');
});

modalButtonCloseElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalPopupElement.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if (['Escape', 'Esc'].includes(evt.key)) {
    if (modalPopupElement.classList.contains('modal-show')) {
      evt.preventDefault();
      modalPopupElement.classList.remove('modal-show');
    }
  }
});