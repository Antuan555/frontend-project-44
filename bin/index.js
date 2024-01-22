import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('');
  let correctAnswer = 0;
  const corAn = 0;
  for (let i = 0; correctAnswer < 3; i += 1) {
    // Тело цикла

    // Конец тела цикла
    const answer = readlineSync.question('Your answer: ');
    if (answer === corAn) {
      correctAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corAn}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainGames();
