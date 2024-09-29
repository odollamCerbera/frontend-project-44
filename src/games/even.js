import brainGames from '../index.js';
import makeRandomNumber from '../utils.js';

const evenInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIsEven = (number) => (number % 2 === 0);

export const getExpression = () => {
  const expression = makeRandomNumber(101, 1);
  const correctAnswer = checkIsEven(expression) ? 'yes' : 'no';
  return [expression, correctAnswer];
};

export default () => (brainGames(evenInstruction, getExpression));
