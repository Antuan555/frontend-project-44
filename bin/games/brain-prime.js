#!/usr/bin/env node
import { start, finish } from '../../src/index.js';

const prime = () => {
  const name = start();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const result = () => {
    let result1;
    const a = Math.floor(Math.random() * 1000);
    console.log(`Question: ${a}`);
    let num = 0;
    for (let j = 1; j <= a; j += 1) {
      if (a % j === 0) {
        num += 1;
      }
    }
    if (num === 2) {
      result1 = 'yes';
    } else {
      result1 = 'no';
    }
    return result1;
  };
  finish(result, name);
};
prime();
