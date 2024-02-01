import { start, finish } from '../index.js';

const prime = () => {
  const name = start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;
  let result;
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 1000);
    console.log(`Question: ${a}`);
    let num = 0;
    for (let j = 1; j <= a; j += 1) {
      if (a % j === 0) {
        num += 1;
      }
    }
    if (num === 2) {
      result = 'yes';
    } else {
      result = 'no';
    }
    const fin = finish(correctAnswers, result, name);
    if (fin === false) {
      break;
    } else {
      correctAnswers += 1;
    }
  }
};
prime();
