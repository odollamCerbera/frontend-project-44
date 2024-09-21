import { askUserName } from "../src/cli.js";
import { correctAnswers, symbols, makeRandomNumber, getRandomIndex, askQuestion, getAnswer } from "../src/index.js";

export const brainCalc = () => {
    const userName = askUserName();
    console.log('What is the result of the expression?');

    let currentCorrectAnswers = 0;
    while(currentCorrectAnswers < correctAnswers) {
        const randomNumber1 = makeRandomNumber(101);
        const randomNumber2 = makeRandomNumber(11);
        const randomSymbol = symbols[getRandomIndex(symbols)];
        
        const expression = `${randomNumber1} ${randomSymbol} ${randomNumber2}`;

        askQuestion(expression);
        
        const userAnswer = getAnswer();
        const correctAnswer = eval(expression);
    
        if (Number(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
        currentCorrectAnswers += 1;
    };
    console.log(`Congratulations, ${userName}!`);
};
