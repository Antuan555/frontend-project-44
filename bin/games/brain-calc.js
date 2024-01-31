import { finish, start } from '../index.js';

const body = () => {
  const name = start();
  console.log('What is the result of the expression?');
  let correctAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomOp = ['+', '-', '*'];
    const index = Math.floor(Math.random() * randomOp.length);
    const result = randomOp[index];
    const ranNum1 = Math.floor(Math.random() * 100);
    const ranNum2 = Math.floor(Math.random() * 100);
    const term = `Question: ${ranNum1} ${result} ${ranNum2}`;
    console.log(term);
    let term2;
    switch (result) {
      case '+':
        term2 = (ranNum1 + ranNum2).toString();
        break;
      case '-':
        term2 = (ranNum1 - ranNum2).toString();
        break;
      default:
        term2 = (ranNum1 * ranNum2).toString();
        break;
    }
    const fin = finish(correctAnswers, term2, name);
    if (fin === false) {
      break;
    } else {
      correctAnswers += 1;
    }
  }
};
body();
