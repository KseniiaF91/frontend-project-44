import playGame from '../index.js';
import randomNumber from '../randomnum.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const generateRoundData = () => {
    let gameNumberFirst = randomNumber();
    let gameNumberSecond = randomNumber();

    const gameQuestion = (`Question: ${gameNumberFirst} ${gameNumberSecond}`);

    let correctAnswer;
    while (gameNumberFirst !== 0 && gameNumberSecond !== 0) {
      if (gameNumberFirst > gameNumberSecond) {
        gameNumberFirst %= gameNumberSecond;
      } else if (gameNumberSecond > gameNumberFirst) {
        gameNumberSecond %= gameNumberFirst;
      }
      correctAnswer = gameNumberFirst + gameNumberSecond;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameGcd;
