import readlineSync from 'readline-sync';

const countGames = 3;

const brainGames = (instruction, getExpression) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instruction);

  for (let currentGames = 0; currentGames < countGames; currentGames += 1) {
    const [expression, correctAnswer] = getExpression();

    console.log(`Question: ${expression}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default brainGames;
