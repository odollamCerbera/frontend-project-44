import readlineSync from 'readline-sync';

const makeRandomNumber = () => {
    return Math.floor(Math.random() * 100);
};

const askQuestion = (expression) => {
    console.log(`Question: ${expression}`);
};

const getAnswer = () => {
    const answerUser = readlineSync.question('Your answer: ');
    return answerUser;
};

export { makeRandomNumber, askQuestion, getAnswer }; 
