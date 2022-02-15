import engine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (startNum, step) => {
  const resultProgression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  return resultProgression;
};

const generateRound = () => {
  const firstEl = getRandom();
  const step = getRandom(30, 1);
  const progression = generateProgression(firstEl, step);
  const randomIndex = getRandom(progressionLength - 1);

  const answer = String(progression[randomIndex]);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question += i !== randomIndex ? `${progression[i]} ` : '.. ';
  }

  return [question, answer];
};

export default () => engine(instruction, generateRound);
