import askUserName from '../src/cli.js';
import {
  countCorrectAnswers,
  makeRandomNumber,
  getRandomIndex,
  askQuestion,
  getAnswer,
  getIncorrectMassage,
} from '../src/index.js';

const symbols = ['+', '-', '*'];

const getCorrectAnswer = (number1, number2, symbol) => {
  let answer;
  switch (symbol) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = 'Incorrect expression';
  }
  return answer;
};

const brainCalc = () => {
  const userName = askUserName();
  console.log('What is the result of the expression?');

  let currentCorrectAnswers = 0;
  while (currentCorrectAnswers < countCorrectAnswers) {
    const randomNumber1 = makeRandomNumber(101);
    const randomNumber2 = makeRandomNumber(11);
    const randomSymbol = symbols[getRandomIndex(symbols)];

    const expression = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

    askQuestion(expression);

    const userAnswer = getAnswer();
    const correctAnswer = getCorrectAnswer(randomNumber1, randomNumber2, randomSymbol);

    if (Number(userAnswer) !== correctAnswer) {
      getIncorrectMassage(userAnswer, correctAnswer, userName);
      return;
    }
    console.log('Correct!');
    currentCorrectAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainCalc;
