const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartChangeColor);
refs.stopBtn.addEventListener('click', offCanceldChangeColor);

function onStartChangeColor(event) {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  const randomBackgColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function offCanceldChangeColor() {
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
  clearInterval(randomBackgColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
