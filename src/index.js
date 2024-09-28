import readlineSync from 'readline-sync';
import askUserName from './cli.js';

const countGames = 3;

const makeRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getUserAnswer = (expression) => {
  console.log(`Question: ${expression}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

const brainGames = (instruction, getExpression) => {
  const userName = askUserName();
  console.log(instruction);

  let currentGames = 0;
  while (currentGames < countGames) {
    const [expression, correctAnswer] = getExpression();

    const userAnswer = getUserAnswer(expression);

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    currentGames += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export { makeRandomNumber, brainGames };
