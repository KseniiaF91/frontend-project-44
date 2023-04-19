import mainGameLogic from '../index.js';
import randomNumber from '../randomnum.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const gameRules = () => {
    let gameRandomNumberFirst = randomNumber();
    let gameRandomNumberSecond = randomNumber();

    const gameQuestion = (`Question: ${gameRandomNumberFirst} ${gameRandomNumberSecond}`);

    let correctAnswer;
    while (gameRandomNumberFirst !== 0 && gameRandomNumberSecond !== 0) {
      if (gameRandomNumberFirst > gameRandomNumberSecond) {
        gameRandomNumberFirst %= gameRandomNumberSecond;
      } else if (gameRandomNumberSecond > gameRandomNumberFirst) {
        gameRandomNumberSecond %= gameRandomNumberFirst;
      }
      correctAnswer = gameRandomNumberFirst + gameRandomNumberSecond;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGameGcd;
