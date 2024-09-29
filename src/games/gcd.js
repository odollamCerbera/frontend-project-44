import brainGames from '../index.js';
import makeRandomNumber from '../utils.js';

const gcdInstruction = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  if (number2 > number1) return getGcd(number2, number1);
  if (number1 % number2 === 0) return number2;
  return getGcd(number2, number1 % number2);
};

export const getExpression = () => {
  const randomNumber1 = makeRandomNumber(101, 1);
  const randomNumber2 = makeRandomNumber(101, 1);

  const expression = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getGcd(randomNumber1, randomNumber2);
  return [expression, correctAnswer];
};

export default () => (brainGames(gcdInstruction, getExpression));
