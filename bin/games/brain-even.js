import readlineSync from 'readline-sync';

const correctNumber = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let an1 = '';
  let correctAnswer = 0;
  for (let i = 0; correctAnswer < 3; i += 1) {
    const random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    if (random % 2 === 0) {
      an1 = 'yes';
    } else {
      an1 = 'no';
    }
    const an2 = readlineSync.question('Your answer: ');
    if (an1 === an2) {
      correctAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`'${an2}' is wrong answer ;(. Correct answer was '${an1}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}`);
  }
};
correctNumber();
