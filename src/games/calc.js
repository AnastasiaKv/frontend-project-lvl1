import getRandom from '../helpers.js';
import engaine from '../index.js';

const instruction = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+': return operand1 + operand2;
    case '-': return operand1 - operand2;
    case '*': return operand1 * operand2;
    default: throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const num1 = getRandom(10);
  const num2 = getRandom(20);
  const operator = operators[getRandom(operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = String(calculate(num1, num2, operator));

  return [question, answer];
};

export default () => engaine(instruction, generateRound);
