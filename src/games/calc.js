import playGame from '../index.js';
import randomNumber from '../randomnum.js';

const playGameCalc = () => {
  const gameTask = 'What is the result of the expression?';

  const generateRoundData = () => {
    const gameNumberFirst = randomNumber();
    const gameNumberSecond = randomNumber();

    const getRandomSigns = () => {
      const signs = ['+', '-', '*'];
      const index = Math.floor(Math.random() * signs.length);
      return signs[index];
    };

    const randomSigns = getRandomSigns();
    const gameQuestion = (`Question: ${gameNumberFirst} ${randomSigns} ${gameNumberSecond}`);

    let correctAnswer;
    if (randomSigns === '+') {
      correctAnswer = gameNumberFirst + gameNumberSecond;
    } else if (randomSigns === '-') {
      correctAnswer = gameNumberFirst - gameNumberSecond;
    } else if (randomSigns === '*') {
      correctAnswer = gameNumberFirst * gameNumberSecond;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameCalc;
