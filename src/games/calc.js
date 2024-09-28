import { makeRandomNumber, brainGames } from '../index.js';

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
      return 'Incorrect expression';
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

const brainCalc = () => (brainGames(calcInstruction, getExpression));

export default brainCalc;
