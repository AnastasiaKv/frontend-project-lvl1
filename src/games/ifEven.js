import engine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const ifEven = (val) => val % 2 === 0;

const generateRound = () => {
  const question = getRandom();
  const answer = ifEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => engine(instruction, generateRound);
