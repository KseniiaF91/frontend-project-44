import playGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const playGamePrime = () => {
  const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRoundData = () => {
    const gameNumber = getRandomNumber(1, 100);
    const gameQuestion = (`${gameNumber}`);
    const isPrime = () => {
      if (gameNumber <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(gameNumber); i += 1) {
        if (gameNumber % i === 0) {
          return false;
        }
      }
      return true;
    };
    const correctAnswer = (isPrime(gameNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };
  playGame(gameTask, generateRoundData);
};
export default playGamePrime;
