import readlineSync from 'readline-sync';

const maxScore = 3;

const init = (instruction) => {
  console.log(instruction);
};

const round = (question, answer, score) => {
  console.log(`Question: ${question}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  if (usersAnswer === answer.toString()) {
    console.log('Correct!');
    return score + 1;
  }
  console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return 0;
};

const finish = (score, name) => {
  const msg = !score ? "Let's try again" : 'Congratulations';
  console.log(`${msg}, ${name}!`);
};

const checkScore = (score) => score && score < maxScore;

const random = (range = 100) => Math.floor(Math.random() * range);

export {
  init,
  round,
  finish,
  checkScore,
  random,
};
