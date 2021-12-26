
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop');

btnStart.addEventListener('click', onBtnStart);
btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    randomBackgColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    console.log(btnStart)
}

function onBtnStop() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(randomBackgColor)
    console.log(btnStart)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}