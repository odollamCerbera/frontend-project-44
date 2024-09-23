import { askUserName } from "../src/cli.js";
import { countCorrectAnswers, makeRandomNumber, getRandomIndex, askQuestion, getAnswer, getIncorrectMassage } from "../src/index.js";

const symbols = ['+', '-', '*'];

export const brainCalc = () => {
    const userName = askUserName();
    console.log('What is the result of the expression?');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < countCorrectAnswers) {
        const randomNumber1 = makeRandomNumber(101);
        const randomNumber2 = makeRandomNumber(11);
        const randomSymbol = symbols[getRandomIndex(symbols)];
        
        const expression = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

        askQuestion(expression);
        
        const userAnswer = getAnswer();
        const correctAnswer = eval(expression);
    
        if (Number(userAnswer) !== correctAnswer) {
            getIncorrectMassage(userAnswer, correctAnswer, userName);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
