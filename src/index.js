import readlineSync from 'readline-sync';

const roundsTotal = 3;

const startGame = (description, run) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundsTotal; i += 1) {
    const roundData = run();
    const { correctAnswer, question } = roundData;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default startGame;

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const isEven = (number) => number % 2 === 0;
