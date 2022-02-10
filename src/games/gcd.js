import * as game from '../index.js';

const instruction = 'Find the greatest common divisor of given numbers.';
const maxNumber1 = 30;
const maxNumber2 = 100;

const getNumbers = () => [game.random(maxNumber1), game.random(maxNumber2)];
const numbersToString = (nums) => `${nums[0]} ${nums[1]}`;
const findGSD = (a, b) => (!b ? a : findGSD(b, a % b));

const gcdGame = (userName) => {
  let score = 0;
  game.init(instruction);

  do {
    const nums = getNumbers();
    score = game.round(numbersToString(nums), findGSD(...nums), score);
  } while (game.checkScore(score));

  game.finish(score, userName);
};

export default gcdGame;
