import { askUserName } from "../src/cli.js";
import { countCorrectAnswers, makeRandomNumber, askQuestion, getAnswer, getIncorrectMassage } from "../src/index.js";

export const brainEven = () => {
    const userName = askUserName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < countCorrectAnswers) {
        const expression = makeRandomNumber(101);

        askQuestion(expression);
        
        const userAnswer = getAnswer();
        const correctAnswer = expression % 2 === 0 || expression === 0 ? 'yes' : 'no';
        
        if (userAnswer !== correctAnswer) {
            getIncorrectMassage(userAnswer, correctAnswer, userName);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
