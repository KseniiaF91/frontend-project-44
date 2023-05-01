import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGameEven = () => {
  const isEven = (number) => number % 2 === 0;
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRoundData = () => {
    const gameNumber = getRandomNumber(1, 100);
    const gameQuestion = gameNumber.toString();
    const correctAnswer = (isEven(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameEven;
