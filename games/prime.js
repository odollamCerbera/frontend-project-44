import askUserName from '../src/cli.js';
import {
  countCorrectAnswers,
  makeRandomNumber,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
} from '../src/index.js';

const brainPrimeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }

  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const brainPrime = () => {
  const userName = askUserName();
  console.log(brainPrimeRules);

  let currentCorrectAnswers = 0;
  while (currentCorrectAnswers < countCorrectAnswers) {
    const expression = makeRandomNumber(101);

    askQuestion(expression);

    const userAnswer = getAnswer();
    const correctAnswer = checkIsPrime(expression);

    if (userAnswer !== correctAnswer) {
      getIncorrectMassage(userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
    currentCorrectAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainPrime;
