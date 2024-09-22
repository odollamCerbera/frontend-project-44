import readlineSync from 'readline-sync';

const countCorrectAnswers = 3;
const symbols = ['+', '-', '*'];

const makeRandomNumber = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min) + min);
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

const getIncorrectMassage = (userAnswer, correctAnswer, userName) => {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
};

const getNOD = (number1, number2) => {
    if (number2 > number1) {
        return getNOD(number2, number1);
    }
	if (number1 % number2 === 0) {
        return number2;
    }
	return getNOD(number2, number1 % number2);
};

const getDataProgression = (beginProgression, stepProgression, minLengthProgression) => {
    const progression = [beginProgression];
    
    for (let i = 0; i < minLengthProgression; i+= 1) {
      progression.push(progression[i] + stepProgression);
    }

    const hiddenIndex = getRandomIndex(progression);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
   
    return [progression.join(' '), correctAnswer];
};

export { countCorrectAnswers, symbols, makeRandomNumber, getRandomIndex, askQuestion, getAnswer, getIncorrectMassage, getNOD, getDataProgression }; 
