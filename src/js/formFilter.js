const formFilter = document.querySelector('.form__filter');
const formBooking = document.querySelector('.form__booking-block');
formBooking.addEventListener('click', () => {
  formFilter.classList.toggle('_filter__on');
});

const formInputAdult = document.querySelector('.form__adults-num');
const formInputChild = document.querySelector('.form__children-num');
const formInputRoom = document.querySelector('.form__room-num');

const increaseButtonsAdult = document.querySelectorAll(
  '.button__increase--adults',
);
increaseButtonsAdult.forEach((button) => {
  button.addEventListener('click', () => {
    const countElement = button.previousElementSibling;
    const currentValue = parseInt(countElement.textContent);
    const maxValue = parseInt(button.dataset.maxValue);
    if (currentValue < maxValue) {
      countElement.textContent = currentValue + 1;
      formInputAdult.value = currentValue + 1;
      if (currentValue + 1 === maxValue) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
    }
  });
});

const decreaseButtonsAdult = document.querySelectorAll(
  '.button__decrease--adults',
);
decreaseButtonsAdult.forEach((button) => {
  button.addEventListener('click', () => {
    const countElement = button.nextElementSibling;
    const currentValue = parseInt(countElement.textContent);
    if (currentValue > 0) {
      countElement.textContent = currentValue - 1;
      formInputAdult.value = currentValue - 1;
      if (currentValue - 1 === 0) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
    }
  });
});

const ageWrapper = document.createElement('div');
ageWrapper.classList.add('form__wrapper');
formFilter.appendChild(ageWrapper);

const increaseButtonsChild = document.querySelectorAll(
  '.button__increase--children',
);
increaseButtonsChild.forEach((button) => {
  button.addEventListener('click', () => {
    const adultsCountElement = document.querySelector('.count__adults');
    const adultsCount = parseInt(adultsCountElement.textContent);
    if (adultsCount === 0) {
      return;
    }
    const countElement = button.previousElementSibling;
    const currentValue = parseInt(countElement.textContent);
    const maxValue = parseInt(button.dataset.maxValue);
    if (currentValue < maxValue) {
      countElement.textContent = currentValue + 1;
      formInputChild.value = currentValue + 1;
      if (currentValue + 1 === maxValue) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
      if (currentValue === 0) {
        const ageSubtitle = document.createElement('p');
        ageSubtitle.textContent =
          'What is the age of the child you’re travelling with?';
        ageSubtitle.classList.add('filter__subtitle');
        ageWrapper.appendChild(ageSubtitle);
      }
      const ageSelect = document.createElement('select');
      ageSelect.classList.add('filter__select');
      for (let i = 0; i <= 17; i++) {
        const option = document.createElement('option');
        option.classList.add('filter__option');
        option.value = i;
        option.textContent = `${i} years old`;
        ageSelect.appendChild(option);
      }
      ageWrapper.appendChild(ageSelect);
      formFilter.style.height = 'auto';
    }
  });
});

const decreaseButtonsChild = document.querySelectorAll(
  '.button__decrease--children',
);
decreaseButtonsChild.forEach((button) => {
  button.addEventListener('click', () => {
    const countElement = button.nextElementSibling;
    const currentValue = parseInt(countElement.textContent);
    if (currentValue > 0) {
      countElement.textContent = currentValue - 1;
      formInputChild.value = currentValue - 1;
      if (currentValue - 1 === 0) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
      const lastAgeSelect = ageWrapper.querySelector('select:last-of-type');
      if (lastAgeSelect) {
        lastAgeSelect.remove();
      }
      if (currentValue === 1) {
        const ageSubtitle = ageWrapper.querySelector('.filter__subtitle');
        if (ageSubtitle) {
          ageSubtitle.remove();
        }
      }
      formFilter.style.height = 'auto';
    }
  });
});

const increaseButtonsRoom = document.querySelectorAll(
  '.button__increase--room',
);
increaseButtonsRoom.forEach((button) => {
  button.addEventListener('click', () => {
    const countElement = button.previousElementSibling;
    const currentValue = parseInt(countElement.textContent);
    const maxValue = parseInt(button.dataset.maxValue);
    if (currentValue < maxValue) {
      countElement.textContent = currentValue + 1;
      formInputRoom.value = currentValue + 1;
      if (currentValue + 1 === maxValue) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
    }
  });
});

const decreaseButtonsRoom = document.querySelectorAll(
  '.button__decrease--room',
);
decreaseButtonsRoom.forEach((button) => {
  button.addEventListener('click', () => {
    const countElement = button.nextElementSibling;
    const currentValue = parseInt(countElement.textContent);
    if (currentValue > 0) {
      countElement.textContent = currentValue - 1;
      formInputRoom.value = currentValue - 1;
      if (currentValue - 1 === 0) {
        button.classList.remove('_active');
        button.classList.add('_disable');
      } else {
        button.classList.add('_active');
        button.classList.remove('_disable');
      }
    }
  });
});
