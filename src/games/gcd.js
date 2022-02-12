import engaine from '../index.js';
import getRandom from '../helpers.js';

const instruction = 'Find the greatest common divisor of given numbers.';
const maxNumber1 = 30;
const maxNumber2 = 100;

const getNumbers = () => [getRandom(maxNumber1), getRandom(maxNumber2)];
const numbersToString = (nums) => `${nums[0]} ${nums[1]}`;
const findGSD = (a, b) => (!b ? a : findGSD(b, a % b));

const generateRound = () => {
  const nums = getNumbers();
  return [numbersToString(nums), findGSD(...nums)];
};

export default () => engaine(instruction, generateRound);
