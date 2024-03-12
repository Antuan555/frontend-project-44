#!/usr/bin/env node
import { finish, start } from '../../src/index.js';

const correctNumber = () => {
  const name = start();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let an1 = '';
  let correctAnswers = 0;
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    if (random % 2 === 0) {
      an1 = 'yes';
    } else {
      an1 = 'no';
    }
    const fin = finish(correctAnswers, an1, name);
    if (fin === false) {
      break;
    } else {
      correctAnswers += 1;
    }
  }
};
correctNumber();
