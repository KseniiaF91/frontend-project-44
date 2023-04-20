import playGame from '../index.js';
import randomNumber from '../randomnum.js';

const playGameEven = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRoundData = () => {
    const isEven = (number) => number % 2 === 0;
    const gameNumber = randomNumber();
    const gameQuestion = (`Question: ${gameNumber}`);
    const correctAnswer = (isEven(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  playGame(gameTask, generateRoundData);
};
export default playGameEven;
