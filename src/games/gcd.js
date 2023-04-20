import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const generateRoundData = () => {
    let gameNumberFirst = getRandomNumber(1, 100);
    let gameNumberSecond = getRandomNumber(1, 100);
    const gameQuestion = (`${gameNumberFirst} ${gameNumberSecond}`);

    const getCorrectAnswer = () => {
      let correctAnswer;
      while (gameNumberFirst !== 0 && gameNumberSecond !== 0) {
        if (gameNumberFirst > gameNumberSecond) {
          gameNumberFirst %= gameNumberSecond;
        } else if (gameNumberSecond > gameNumberFirst) {
          gameNumberSecond %= gameNumberFirst;
        }
        correctAnswer = gameNumberFirst + gameNumberSecond;
      }
      return correctAnswer.toString();
    };
    return [gameQuestion, getCorrectAnswer()];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameGcd;
