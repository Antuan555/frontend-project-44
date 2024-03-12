#!/usr/bin/env node
import { finish, start } from '../../src/index.js';

const body = () => {
  const name = start();
  console.log('Find the greatest common divisor of given numbers.');
  const result1 = () => {
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
    return result;
  };
  finish(result1, name);
};
body();
