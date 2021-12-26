import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';


const formEl = document.querySelector('.form')

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(e) {
  e.preventDefault();

  let delay = Number(e.currentTarget.delay.value);
  let step = Number(e.currentTarget.step.value);
  let amount = Number(e.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {useIcon: false});
        }), delay;
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,  {useIcon: false});
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.6;
  const objPromise = { position, delay };

  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve(objPromise);
  } else {
        reject(objPromise);
  }
}
  )};



// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notify.success('✅ Fulfilled promise ${position} in ${delay}ms');
//   })
//   .catch(({ position, delay }) => {
//     Notify.failure('❌ Rejected promise ${position} in ${delay}ms');
//   });

  