import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGameProgression = () => {
  const gameTask = 'What number is missing in the progression?';

  const generateRoundData = () => {
    const arr = [];
    const length = 10;
    const difference = getRandomNumber(1, 10);
    arr[0] = getRandomNumber(1, 100);

    const makeProgression = () => {
      for (let i = 1; i < length; i += 1) {
        arr[i] = arr[i - 1] + difference;
      }
      return arr;
    };
    const hiddenSymbol = makeProgression().splice(getRandomNumber(0, arr.length - 1), 1, '..');
    const arrSeparator = arr.join(' ');
    const gameQuestion = (`${arrSeparator}`);

    const correctAnswer = hiddenSymbol;

    return [gameQuestion, correctAnswer.toString()];
  };

  playGame(gameTask, generateRoundData);
};
export default playGameProgression;
