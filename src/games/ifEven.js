import engine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const ifEvenNumber = (val) => (val % 2 ? 'no' : 'yes');

const generateRound = () => {
  const num = getRandom();
  return [num, ifEvenNumber(num)];
};

export default () => engine(instruction, generateRound);
