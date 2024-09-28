import { makeRandomNumber, brainGames } from '../index.js';

const primeInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (number) => {
  if (number <= 1) return 'no';

  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) return 'no';
  }

  return 'yes';
};

export const getExpression = () => {
  const expression = makeRandomNumber(101);
  const correctAnswer = checkIsPrime(expression);
  return [expression, correctAnswer];
};

const brainPrime = () => (brainGames(primeInstruction, getExpression));

export default brainPrime;
