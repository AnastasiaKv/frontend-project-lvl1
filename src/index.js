import readlineSync from 'readline-sync';
import greeting from './cli.js';

const engine = (description, getRound) => {
  const userName = greeting();
  console.log(description);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = getRound();
    console.log(`Question: ${question}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    if (usersAnswer !== answer.toString()) {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default engine;
