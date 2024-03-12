import readlineSync from 'readline-sync'
export const start = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
export const finish = (an, corAn, name = start()) => {
  const result = an;
  const answer = readlineSync.question('Your answer: ');
  if (answer === corAn) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAn}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if (result === 2) {
    console.log(`Congratulations, ${name}!`);
  }
  return result;
};

// start()
