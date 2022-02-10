import * as game from '../index.js';

const instruction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const maxOperand1 = 10;
const maxOperand2 = 20;

const createExpression = () => [
  game.random(maxOperand1),
  game.random(maxOperand2),
  operators[game.random(operators.length - 1)],
];
const calcExpression = (ex) => {
  const [a, b, operator] = [...ex];
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return null;
  }
};
const expressionToString = (ex) => {
  const [a, b, operator] = [...ex];
  return `${a} ${operator} ${b}`;
};

const calcGame = (userName) => {
  let score = 0;
  game.init(instruction);

  do {
    const ex = createExpression();
    score = game.round(expressionToString(ex), calcExpression(ex), score);
  } while (game.checkScore(score));

  game.finish(score, userName);
};

export default calcGame;
