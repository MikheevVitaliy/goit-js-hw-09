// Напиши скрипт таймера, который ведёт обратный отсчет до определенной даты. Такой таймер может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.

// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  inputTextEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  divEl: document.querySelector('.timer'),
  valueEl: document.querySelectorAll('.value'),
};

let timer = null;
let selectedDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtnEl.setAttribute('disabled', true);
    } else {
      refs.startBtnEl.removeAttribute('disabled', '');
    }
  },
};
flatpickr('input#datetime-picker', options);

refs.startBtnEl.addEventListener('click', onStartCountdown);

function onStartCountdown() {
  refs.startBtnEl.setAttribute('disabled', '');
  refs.inputTextEl.setAttribute('disabled', '');
  timer = setInterval(timeOut, 1000);
}

function timeOut() {
  const getTimeComponents = selectedDate - new Date();

  if (getTimeComponents <= 0) {
    Notiflix.Notify.success('Timer is Over!');
    clearInterval(timer);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(getTimeComponents);

  refs.days.textContent = pad(days);
  refs.hours.textContent = pad(hours);
  refs.minutes.textContent = pad(minutes);
  refs.seconds.textContent = pad(seconds);
}

function pad(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// Стилизация
refs.divEl.style.display = 'flex';
refs.divEl.style.backgroundColor = 'orange';
refs.divEl.style.padding = '10px';
refs.divEl.style.width = '300px';
refs.valueEl.forEach(e => (e.style.fontSize = '40px'));
