import brainGames from '../index.js';
import makeRandomNumber from '../utils.js';

const primeInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (number) => {
  if (number <= 1) return false;

  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) return false;
  }

  return true;
};

export const getExpression = () => {
  const expression = makeRandomNumber(101);
  const correctAnswer = checkIsPrime(expression) ? 'yes' : 'no';
  return [expression, correctAnswer];
};

export default () => (brainGames(primeInstruction, getExpression));
