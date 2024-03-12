#!/usr/bin/env node
import { start, finish } from '../../src/index.js';

const progression = () => {
  const name = start();
  console.log('What number is missing in the progression?');
  const prog = [];
  const result = () => {
    prog.length = 0;
    const d = Math.floor(Math.random() * 10 + 1);
    const a1 = Math.floor(Math.random() * 15);
    const range = Math.floor(Math.random() * 10 + 5);
    for (let j = 1; j <= range; j += 1) {
      const an = a1 + d * (j - 1);
      prog.push(an);
    }
    const index = Math.floor(Math.random() * range);
    const num = prog[index];
    const result1 = num.toString();
    prog[index] = '..';
    console.log(`Question: ${prog.join(' ')}`);
    return result1;
  };
  finish(result, name);
};
progression();
