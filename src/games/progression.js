import startGame, { getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(2, 5);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

const runGameTwo = () => startGame(description, generateRound);

export default runGameTwo;
