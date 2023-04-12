import mainGameLogic from '../index.js';

const playGameCalc = () => {
  const gameTask = 'What is the result of the expression?';

  const gameRules = () => {
    const gameNumberFirst = Math.floor(Math.random() * 100) + 1;
    const gameNumberSecond = Math.floor(Math.random() * 100) + 1;

    const signs = ['+', '-', '*'];
    const index = Math.floor(Math.random() * signs.length);
    const randomSigns = signs[index];

    const gameQuestion = (`${'Question: '}${gameNumberFirst}${randomSigns}${gameNumberSecond}`);

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
  mainGameLogic(gameTask, gameRules);
};
export default playGameCalc;
