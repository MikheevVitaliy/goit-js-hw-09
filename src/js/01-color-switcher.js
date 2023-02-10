// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.

// ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).

const refs = {
  btnStartEl: document.querySelector('button[data-start]'),
  btnStopEl: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

const CHANGE_COLOR_DELAY = 1000;
let idInt = null;

refs.btnStopEl.disabled = true;
refs.btnStartEl.addEventListener('click', onBtnStartChangeColor);
refs.btnStopEl.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  refs.btnStartEl.disabled = true;
  refs.btnStopEl.disabled = false;

  idInt = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, CHANGE_COLOR_DELAY);
}

function onBtnStopChangeColor() {
  refs.btnStartEl.disabled = false;
  refs.btnStopEl.disabled = true;

  clearInterval(idInt);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
