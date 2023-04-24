import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGameProgression = () => {
  const gameTask = 'What number is missing in the progression?';

  const generateRoundData = () => {
    const makeProgression = (startNum, len, diff) => {
      const progression = [];
      progression[0] = startNum;
      for (let i = 1; i < len; i += 1) {
        progression[i] = progression[i - 1] + diff;
      }
      return progression;
    };

    const startNum = getRandomNumber(1, 100);
    const progressionLength = 10;
    const difference = getRandomNumber(1, 10);
    const progression = makeProgression(startNum, progressionLength, difference);

    const randomSymbolIndex = getRandomNumber(0, progression.length - 1);
    const hiddenSymbol = progression.splice(randomSymbolIndex, 1, '..');
    const gameQuestion = (`${progression.join(' ')}`);

    return [gameQuestion, hiddenSymbol.toString()];
  };

  playGame(gameTask, generateRoundData);
};
export default playGameProgression;
