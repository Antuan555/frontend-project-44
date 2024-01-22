import readlineSync from 'readline-sync';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let correctAnswer = 0;
  console.log('What is the result of the expression?');
  for (let i = 0; correctAnswer < 3; i += 1) {
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
        term2 = ranNum1 + ranNum2;
        break;
      case '-':
        term2 = ranNum1 - ranNum2;
        break;
      default:
        term2 = ranNum1 * ranNum2;
        break;
    }
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === term2) {
      correctAnswer += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${term2}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainCalc();
