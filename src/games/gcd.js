import mainGameLogic from '../index.js';
import randomNumber from '../randomnum.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const gameRules = () => {
    let randomNumber1 = randomNumber();
    let randomNumber2 = randomNumber();

    const gameQuestion = (`Question: ${randomNumber1} ${randomNumber2}`);

    let correctAnswer;
    while (randomNumber1 !== 0 && randomNumber2 !== 0) {
      if (randomNumber1 > randomNumber2) {
        randomNumber1 %= randomNumber2;
      } else if (randomNumber2 > randomNumber1) {
        randomNumber2 %= randomNumber1;
      }
      correctAnswer = randomNumber1 + randomNumber2;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGameGcd;
