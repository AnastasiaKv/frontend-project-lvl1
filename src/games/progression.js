import * as game from '../index.js';

const instruction = 'What number is missing in the progression?';
const maxLength = 10;
const minLength = 5;

const createProgression = () => {
  const length = game.random(maxLength, minLength);
  const diff = game.random(maxLength);
  const p = [game.random()];
  for (let i = 1; i < length; i += 1) {
    p[i] = p[i - 1] + diff;
  }
  return p;
};
const getProgressionElement = (p) => p[game.random(p.length - 1)];
const progressionWithGapToString = (p, gap) => {
  let res = '';
  for (let i = 0; i < p.length; i += 1) {
    res += `${p[i] === gap ? '..' : p[i]} `;
  }
  return res;
};

const progressionGame = (userName) => {
  let score = 0;
  game.init(instruction);

  do {
    const progression = createProgression();
    const hiddenEl = getProgressionElement(progression);
    score = game.round(progressionWithGapToString(progression, hiddenEl), hiddenEl, score);
  } while (game.checkScore(score));

  game.finish(score, userName);
};

export default progressionGame;
