import playGame from '../index.js';
import randomNumber from '../randomnum.js';

const playGameProgression = () => {
  const gameTask = 'What number is missing in the progression?';

  const generateRoundData = () => {
    const arr = [];
    const length = 10;
    const difference = Math.floor(Math.random() * 10) + 1;
    arr[0] = randomNumber();

    for (let i = 1; i < length; i += 1) {
      arr[i] = arr[i - 1] + difference;
    }
    const hiddenSymbol = arr.splice((Math.floor(Math.random() * 9) + 1), 1, '..');
    const arrSeparator = arr.join(' ');
    const gameQuestion = (`Question: ${arrSeparator}`);

    const correctAnswer = hiddenSymbol;

    return [gameQuestion, correctAnswer.toString()];
  };

  playGame(gameTask, generateRoundData);
};
export default playGameProgression;
