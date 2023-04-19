import mainGameLogic from '../index.js';
import randomNumber from '../randomnum.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const gameRules = () => {
    let number1 = randomNumber();
    let number2 = randomNumber();

    const gameQuestion = (`Question: ${number1} ${number2}`);

    let correctAnswer;
    while (number1 !== 0 && number2 !== 0) {
      if (number1 > number2) {
        number1 %= number2;
      } else if (number2 > number1) {
        number2 %= number1;
      }
      correctAnswer = number1 + number2;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGameGcd;
