#!/usr/bin/env node
import { finish, start } from '../../src/index.js';

const correctNumber = () => {
  const name = start();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const result = () => {
    let an1;
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    if (random % 2 === 0) {
      an1 = 'yes';
    } else {
      an1 = 'no';
    }
    return an1;
  };
  finish(result, name);
};
correctNumber();
