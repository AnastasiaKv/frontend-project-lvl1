import * as game from '../index.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const ifEvenNumber = (val) => (val % 2 ? 'no' : 'yes');

const ifEvenGame = (userName) => {
  let score = 0;
  game.init(instruction);

  do {
    const num = game.random();
    score = game.round(num, ifEvenNumber(num), score);
  } while (game.checkScore(score));

  game.finish(score, userName);
};

export default ifEvenGame;
