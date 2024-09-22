import { askUserName } from "../src/cli.js";
import { countCorrectAnswers, makeRandomNumber, askQuestion, getAnswer, getIncorrectMassage, getDataProgression } from "../src/index.js";

export const brainProgression = () => {
    const userName = askUserName();
    console.log('What number is missing in the progression?');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < countCorrectAnswers) {
        const beginProgression = makeRandomNumber(101);
        const stepProgression = makeRandomNumber(11, 1);
        const minLengthProgression = 9;

        const dataProgression = getDataProgression(beginProgression, stepProgression, minLengthProgression);
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
