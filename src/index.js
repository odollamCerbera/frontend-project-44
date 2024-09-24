import readlineSync from 'readline-sync';

export const countCorrectAnswers = 3;

export const makeRandomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);

export const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export const askQuestion = (expression) => (console.log(`Question: ${expression}`));

export const getAnswer = () => {
  const answerUser = readlineSync.question('Your answer: ');
  return answerUser;
};

export const getIncorrectMassage = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};
