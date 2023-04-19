import mainGameLogic from '../index.js';
import randomNumber from '../randomnum.js';

const playGamePrime = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameRules = () => {
    const isPrime = (number) => {
      if (number <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
          return false;
        }
      }
      return true;
    };
    const gameNumber = randomNumber();
    const gameQuestion = (`Question: '${gameNumber}`);
    const correctAnswer = (isPrime(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  mainGameLogic(gameTask, gameRules);
};
export default playGamePrime;
