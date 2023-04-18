import mainGameLogic from '../index.js';

const playGameProgression = () => {
  const gameTask = 'What number is missing in the progression?';

  const gameRules = () => {
    const arr = [];
    const length = 10;
    const difference = Math.floor(Math.random() * 10) + 1;
    arr[0] = Math.floor(Math.random() * 10) + 1;

    for (let i = 1; i < length; i += 1) {
      arr[i] = arr[i - 1] + difference;
    }
    const hiddenSymbol = arr.splice((Math.floor(Math.random() * 10) + 1), 1, '..');

    const gameQuestion = (`${'Question: '}${arr}`);

    const correctAnswer = hiddenSymbol;

    return [gameQuestion, correctAnswer.toString()];
  };

  mainGameLogic(gameTask, gameRules);
};
export default playGameProgression;
