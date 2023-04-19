import mainGameLogic from '../index.js';
import randomNumber from '../randomnum.js';
import isPrime from '../src/isPrime.js';

const playGamePrime = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameRules = () => {
    const gameNumber = randomNumber();
    const gameQuestion = (`Question: ${gameNumber}`);
    const correctAnswer = (isPrime(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGamePrime;
