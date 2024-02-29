import startGame, { getRandomNumber } from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, ratio, length) => {
  const progression = [];
  let current = start;

  for (let i = 0; i < length; i++) {
    progression.push(current);
    current *= ratio;
  }

  return progression;
};

// Generate round using geometric progression
const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const ratio = getRandomNumber(2, 5);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, ratio, length);

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
