import { makeRandomNumber, brainGames } from '../index.js';

const gcdInstruction = 'Find the greatest common divisor of given numbers.';

const getNOD = (number1, number2) => {
  if (number2 > number1) return getNOD(number2, number1);
  if (number1 % number2 === 0) return number2;
  return getNOD(number2, number1 % number2);
};

export const getExpression = () => {
  const randomNumber1 = makeRandomNumber(101, 1);
  const randomNumber2 = makeRandomNumber(101, 1);

  const expression = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = getNOD(randomNumber1, randomNumber2);
  return [expression, correctAnswer];
};

const brainGcd = () => (brainGames(gcdInstruction, getExpression));

export default brainGcd;
