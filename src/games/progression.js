import engine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'What number is missing in the progression?';
const maxLength = 10;
const minLength = 5;

const createProgression = () => {
  const length = getRandom(maxLength, minLength);
  const diff = getRandom(maxLength, 1);
  const p = [getRandom()];
  for (let i = 1; i < length; i += 1) {
    p[i] = p[i - 1] + diff;
  }
  return p;
};
const getProgressionElement = (p) => p[getRandom(p.length - 1)];
const progressionWithGapToString = (p, gap) => {
  let res = '';
  for (let i = 0; i < p.length; i += 1) {
    res += `${p[i] === gap ? '..' : p[i]} `;
  }
  return res;
};

const generateRound = () => {
  const progression = createProgression();
  const hiddenEl = getProgressionElement(progression);
  return [progressionWithGapToString(progression, hiddenEl), hiddenEl];
};

export default () => engine(instruction, generateRound);
