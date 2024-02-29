import readlineSync from 'readline-sync';
import runGameTwo from './games/progression.js';
import runGameOne from './games/scm.js';

const menu = () => {
  console.log('Select a game:');
  console.log('1 - Brain SCM');
  console.log('2 - Brain Progression');

  const game = readlineSync.question('Enter your choice: ');

  switch (game) {
    case '1':
      runGameOne();
      break;
    case '2':
      runGameTwo();
      break;
    default:
      console.log('Invalid choice');
  }
};

export default menu;
