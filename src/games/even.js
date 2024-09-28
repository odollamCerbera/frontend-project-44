import { makeRandomNumber, brainGames } from '../index.js';

const evenInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export const getExpression = () => {
  const expression = makeRandomNumber(101, 1);
  const correctAnswer = checkIsEven(expression);
  return [expression, correctAnswer];
};

const brainEven = () => (brainGames(evenInstruction, getExpression));

export default brainEven;
