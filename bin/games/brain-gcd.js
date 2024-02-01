import { finish, start } from '../index.js';

const body = () => {
  console.log('brain-gcd');
  console.log('');
  const name = start();
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    let a = Math.floor(Math.random() * 150);
    let b = Math.floor(Math.random() * 150);
    console.log(`Question: ${a} ${b}`);
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    const result = (a + b).toString();
    const fin = finish(correctAnswers, result, name);
    if (fin === false) {
      break;
    } else {
      correctAnswers += 1;
    }
  }
};
body();
