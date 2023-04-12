import mainGameLogic from '../index.js';

const playGameEven = () => {
  const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameRules = () => {
    const isEven = (number) => number % 2 === 0;
    const gameNumber = Math.floor(Math.random() * 100) + 1;
    const gameQuestion = (`${'Question: '}${gameNumber}`);
    const correctAnswer = (isEven(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGameEven;
