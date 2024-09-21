import { askUserName } from "../src/cli.js";
import { makeRandomNumber, askQuestion, getAnswer } from "../src/index.js";

export const brainEven = () => {
    const userName = askUserName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const correctAnswers = 3;
    let currentCorrectAnswers = 0;

    while(currentCorrectAnswers < correctAnswers) {
        const randomNumber = makeRandomNumber();
        const expression = randomNumber;

        askQuestion(expression);
        
        const userAnswer = getAnswer();
        const correctAnswer = expression % 2 === 0 || expression === 0 ? 'yes' : 'no';
    
        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
