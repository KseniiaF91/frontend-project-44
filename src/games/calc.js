import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGameCalc = () => {
  const gameTask = 'What is the result of the expression?';

  const generateRoundData = () => {
    const gameNumberFirst = getRandomNumber(1, 100);
    const gameNumberSecond = getRandomNumber(1, 100);

    const getRandomSigns = () => {
      const signs = ['+', '-', '*'];
      const index = getRandomNumber(0, signs.length - 1);
      return signs[index];
    };
    const randomSign = getRandomSigns();
    const gameQuestion = (`${gameNumberFirst} ${randomSign} ${gameNumberSecond}`);

    const getCorrectAnswer = () => {
      let correctAnswer;
      switch (randomSign) {
        case '+':
          correctAnswer = gameNumberFirst + gameNumberSecond;
          break;
        case '-':
          correctAnswer = gameNumberFirst - gameNumberSecond;
          break;
        case '*':
          correctAnswer = gameNumberFirst * gameNumberSecond;
          break;
        default:
          throw new Error(`Unknown randomSign: '${randomSign}'!`);
      }
      return correctAnswer.toString();
    };
    return [gameQuestion, getCorrectAnswer()];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameCalc;
