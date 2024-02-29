import startGame, { getRandomNumber } from '../index.js';

const description = 'Find the smallest common multiple of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getLcm = (a, b) => (a * b) / getGcd(a, b);

const generateRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const num3 = getRandomNumber(1, 50);

  const question = `${num1} ${num2} ${num3}`;
  const correctAnswer = getLcm(getLcm(num1, num2), num3);

  return {
    question,
    correctAnswer: correctAnswer.toString(),
  };
};

const runGameOne = () => startGame(description, generateRound);
export default runGameOne;
