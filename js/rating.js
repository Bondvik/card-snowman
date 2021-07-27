const starRateElement = document.querySelector('.star-rate');
const starRateItemElements = document.querySelectorAll('.star-rate__item');

const removeClass = (arr, ...theArgs) => {
  for (let item of arr) {
    for (let i = 0; i < theArgs.length; i++) {
      item.classList.remove(theArgs[i]);
    }
  }
};

const addClass = (arr, ...theArgs) => {
  for (let item of arr) {
    for (let i = 0; i < theArgs.length; i++) {
      item.classList.add(theArgs[i]);
    }
  }
};

const mouseOverActiveClass = (arr) => {
  for (let element of arr) {
    if (element.classList.contains('active')) {
      break;
    } else {
      element.classList.add('active');
    }
  }
};

const mouseOutActiveClass = (arr) => {
  for (let i = arr.length - 1; i >= 1; i--) {
    if (arr[i].classList.contains('current')) {
      break;
    } else {
      arr[i].classList.remove('active')
    }
  }
};

const starRateClickHandler = (evt) => {
  if (evt.target.classList.contains('star-rate__item')) {
    removeClass(starRateItemElements, 'current');
    evt.target.classList.add('active', 'current');
   }
};

const starRateMouseOverHandler = (evt) => {
  if (evt.target.classList.contains('star-rate__item')) {
    removeClass(starRateItemElements, 'active', 'current');
    evt.target.classList.add('active');
    mouseOverActiveClass(starRateItemElements);
  }
};

const starRateMouseOutHandler = () => {
  addClass(starRateItemElements, 'active');
  mouseOutActiveClass(starRateItemElements);
};

starRateElement.addEventListener('click', starRateClickHandler);
starRateElement.addEventListener('mouseover', starRateMouseOverHandler);
starRateElement.addEventListener('mouseout', starRateMouseOutHandler);