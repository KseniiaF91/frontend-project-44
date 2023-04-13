import mainGameLogic from '../index.js';

const playGameGcd = () => {
  const gameTask = 'Find the greatest common divisor of given numbers.';

  const gameRules = () => {
    let gameNumberFirst = Math.floor(Math.random() * 100) + 1;
    let gameNumberSecond = Math.floor(Math.random() * 100) + 1;

    const gameQuestion = (`${'Question: '}${gameNumberFirst} ${gameNumberSecond}`);

    let correctAnswer;
    while (gameNumberFirst !== 0 && gameNumberSecond !== 0) {
      if (gameNumberFirst > gameNumberSecond) {
        gameNumberFirst %= gameNumberSecond;
      } else if (gameNumberSecond > gameNumberFirst) {
        gameNumberSecond %= gameNumberFirst;
      }
      correctAnswer = gameNumberFirst + gameNumberSecond;
    }
    return [gameQuestion, correctAnswer.toString()];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGameGcd;
