import { askUserName } from "../src/cli.js";
import { countCorrectAnswers, makeRandomNumber, getRandomIndex, askQuestion, getAnswer, getIncorrectMassage } from "../src/index.js";

const lengthProgression = 9;

const getDataProgression = (beginProgression, stepProgression, lengthProgression) => {
    const progression = [beginProgression];
    
    for (let i = 0; i < lengthProgression; i += 1) {
      progression.push(progression[i] + stepProgression);
    }

    const hiddenIndex = getRandomIndex(progression);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
   
    return [progression.join(' '), correctAnswer];
};

export const brainProgression = () => {
    const userName = askUserName();
    console.log('What number is missing in the progression?');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < countCorrectAnswers) {
        const beginProgression = makeRandomNumber(101);
        const stepProgression = makeRandomNumber(11, 1);

        const dataProgression = getDataProgression(beginProgression, stepProgression, lengthProgression);
        const expression = dataProgression[0];
        const correctAnswer =  dataProgression[1];

        askQuestion(expression);

        const userAnswer = getAnswer();
        
        if (Number(userAnswer) !== correctAnswer) {
            getIncorrectMassage(userAnswer, correctAnswer, userName);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
