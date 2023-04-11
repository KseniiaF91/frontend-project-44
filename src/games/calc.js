import readlineSync from 'readline-sync';

const playGameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);

  for (let i = 0; i < 3; i += 1) {
    const gameNumberFirst = Math.floor(Math.random() * 100) + 1;
    const gameNumberSecond = Math.floor(Math.random() * 100) + 1;
    const signs = ['+', '-', '*'];
    const index = Math.floor(Math.random() * signs.length);
    const randomSigns = signs[index];
    const userAnswer = readlineSync.question(`${'Question: '}${gameNumberFirst}${randomSigns}${gameNumberSecond} \n${'Your answer: '}`);
    let correctAnswer;
    if (randomSigns === '+') {
      correctAnswer = gameNumberFirst + gameNumberSecond;
    } else if (randomSigns === '-') {
      correctAnswer = gameNumberFirst - gameNumberSecond;
    } else if (randomSigns === '*') {
      correctAnswer = gameNumberFirst * gameNumberSecond;
    }
    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default playGameCalc;
