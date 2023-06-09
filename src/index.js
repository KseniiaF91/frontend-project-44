import readlineSync from 'readline-sync';

const playGame = (gameTask, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  const numberOfGameRounds = 3;
  for (let i = 0; i < numberOfGameRounds; i += 1) {
    const [gameQuestion, correctAnswer] = generateRoundData();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question(`${'Your answer: '}`);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGame;
