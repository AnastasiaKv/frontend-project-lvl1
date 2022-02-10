import * as game from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const ifPrime = (x) => {
  if (x < 2) return false;
  for (let i = 2; i <= x / 2; i += 1) {
    if (x % i === 0) return false;
  }
  return true;
};

const ifPrimeGame = (userName) => {
  let score = 0;
  game.init(instruction);

  do {
    const num = game.random();
    score = game.round(num, ifPrime(num) ? 'yes' : 'no', score);
  } while (game.checkScore(score));

  game.finish(score, userName);
};

export default ifPrimeGame;
