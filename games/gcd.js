import { askUserName } from "../src/cli.js";
import { countCorrectAnswers, makeRandomNumber, askQuestion, getAnswer, getIncorrectMassage, getNOD } from "../src/index.js";

export const brainGcd = () => {
    const userName = askUserName();
    console.log('Find the greatest common divisor of given numbers.');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < countCorrectAnswers) {
        const randomNumber1 = makeRandomNumber(101, 1);
        const randomNumber2 = makeRandomNumber(101, 1);
        const expression = `${randomNumber1} ${randomNumber2}`; 

        askQuestion(expression);
        
        const userAnswer = getAnswer();
        const correctAnswer = getNOD(randomNumber1, randomNumber2);
        
        if (Number(userAnswer) !== correctAnswer) {
            getIncorrectMassage(userAnswer, correctAnswer, userName);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
