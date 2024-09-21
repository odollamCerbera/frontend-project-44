import readlineSync from 'readline-sync';

const correctAnswers = 3;
const symbols = ['+', '-', '*'];

const makeRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
};

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

const askQuestion = (expression) => {
    console.log(`Question: ${expression}`);
};

const getAnswer = () => {
    const answerUser = readlineSync.question('Your answer: ');
    return answerUser;
};

export { correctAnswers, symbols, makeRandomNumber, getRandomIndex, askQuestion, getAnswer }; 
