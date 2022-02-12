import engine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const ifPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const num = getRandom();
  return [num, ifPrime(num) ? 'yes' : 'no'];
};

export default () => engine(instruction, generateRound);
