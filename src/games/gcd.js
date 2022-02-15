import engaine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'Find the greatest common divisor of given numbers.';

const gsd = (a, b) => (!b ? a : gsd(b, a % b));

const generateRound = () => {
  const num1 = getRandom(30);
  const num2 = getRandom(100);

  const question = `${num1} ${num2}`;
  const answer = String(gsd(num1, num2));

  return [question, answer];
};

export default () => engaine(instruction, generateRound);
