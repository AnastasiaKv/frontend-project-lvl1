import getRandom from '../helpers.js';
import engaine from '../index.js';

const instruction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const maxOperand1 = 10;
const maxOperand2 = 20;

const createExpression = () => [
  getRandom(maxOperand1),
  getRandom(maxOperand2),
  operators[getRandom(operators.length - 1)],
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

const generateRound = () => {
  const ex = createExpression();
  return [expressionToString(ex), calcExpression(ex)];
};

export default () => engaine(instruction, generateRound);
