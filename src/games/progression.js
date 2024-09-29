import brainGames from '../index.js';
import makeRandomNumber from '../utils.js';

const progressionInstruction = 'What number is missing in the progression?';

const lengthProgression = 9;

const getDataProgression = (begin, step, length) => {
  const progression = [begin];

  for (let i = 0; i < length; i += 1) {
    progression.push(progression[i] + step);
  }

  const hiddenIndex = makeRandomNumber(10);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

export const getExpression = () => {
  const beginProgression = makeRandomNumber(101);
  const stepProgression = makeRandomNumber(11, 1);

  const [expression, correctAnswer] = getDataProgression(
    beginProgression,
    stepProgression,
    lengthProgression,
  );

  return [expression, correctAnswer];
};

export default () => (brainGames(progressionInstruction, getExpression));
