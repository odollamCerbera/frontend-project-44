import askUserName from '../src/cli.js';
import {
  countCorrectAnswers,
  makeRandomNumber,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
} from '../src/index.js';

const brainGcdRules = 'Find the greatest common divisor of given numbers.';

const getNOD = (number1, number2) => {
  if (number2 > number1) {
    return getNOD(number2, number1);
  }
  if (number1 % number2 === 0) {
    return number2;
  }

  return getNOD(number2, number1 % number2);
};

const brainGcd = () => {
  const userName = askUserName();
  console.log(brainGcdRules);

  let currentCorrectAnswers = 0;
  while (currentCorrectAnswers < countCorrectAnswers) {
    const randomNumber1 = makeRandomNumber(101, 1);
    const randomNumber2 = makeRandomNumber(101, 1);
    const expression = `${randomNumber1} ${randomNumber2}`;

    askQuestion(expression);

    const userAnswer = getAnswer();
    const correctAnswer = getNOD(randomNumber1, randomNumber2);

    if (Number(userAnswer) !== correctAnswer) {
      getIncorrectMassage(userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
    currentCorrectAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainGcd;
