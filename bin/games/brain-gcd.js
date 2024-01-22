import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswer = 0;
  let corAn = 0;
  for (let i = 0; correctAnswer < 3; i += 1) {
    // Тело цикла
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
    corAn = a + b;
    // Конец тела цикла
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === corAn) {
      correctAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAn}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainGames();
