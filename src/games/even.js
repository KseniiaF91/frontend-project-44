import readlineSync from 'readline-sync';

const playGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  const isEven = (number) => number % 2 === 0;
  for (let i = 0; i < 3; i += 1) {
    const gameNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = (isEven(gameNumber)) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`${'Question: '}${gameNumber}\n${'Your answer: '}`);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGameEven;
