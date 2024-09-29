import brainGames from '../index.js';
import makeRandomNumber from '../utils.js';

const calcInstruction = 'What is the result of the expression?';

const symbols = ['+', '-', '*'];

const calculateExpression = (number1, number2, symbol) => {
  let result;
  switch (symbol) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      throw new Error(`Incorrect expression: '${symbol}'!`);
  }
  return result;
};

export const getExpression = () => {
  const randomNumber1 = makeRandomNumber(101);
  const randomNumber2 = makeRandomNumber(11);
  const randomSymbol = makeRandomNumber(3);

  const expression = `${randomNumber1} ${symbols[randomSymbol]} ${randomNumber2}`;
  const correctAnswer = calculateExpression(randomNumber1, randomNumber2, symbols[randomSymbol]);
  return [expression, correctAnswer];
};

export default () => (brainGames(calcInstruction, getExpression));
