import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const playGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 0; i < 3; i += 1) {
    const gameNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = (isEven(gameNumber)) ? "'yes'" : "'no'";
    const userAnswer = readlineSync.question(`${'Question: '}${gameNumber}\n${'Your answer: '}`);
    if (gameNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (gameNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGameEven;
