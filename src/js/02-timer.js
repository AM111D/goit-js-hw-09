import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input[type="text"]'),
  startBtn: document.querySelector('button[type="button"]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startBtn.setAttribute('disabled', 'disabled');
refs.startBtn.addEventListener('click', onCountTime);

const selectedDatesOnUnix = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDatesOnUnix = selectedDates[0];

    if (selectedDatesOnUnix > Date.now()) {
      refs.startBtn.removeAttribute('disabled', 'disabled');
    } else {
      alert('asfdasdsadsa');
    }
  },
};

flatpickr(refs.input, options);

function onCountTime() {
  const idInterval = setInterval(() => {
    const time = selectedDatesOnUnix - Date.now();
    const { days, hours, minutes, seconds } = convertMs(time);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }, 1000);
}
// ---------------------------
// function onClickStartBtn(event) {
//   setInterval(() => {
//     const time = selectedDatesOnUnix - Date.now();
//     const { days, hours, minutes, seconds } = convertMs(time);

//     // refs.days.textContent = days;
//     // refs.hours.textContent = hours;
//     // refs.minutes.textContent = minutes;
//     // refs.seconds.textContent = seconds;
//   }, 1000);
// }

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs()); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs()); // {days: 0, hours: 6 minutes: 42, seconds: 20}
