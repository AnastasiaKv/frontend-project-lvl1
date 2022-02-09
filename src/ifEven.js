import readlineSync from 'readline-sync';

const range = 100;
const randomNumber = () => Math.floor(Math.random() * range);
const ifEvenNumber = (val) => (val % 2 ? 'no' : 'yes');
const askQuestion = (val) => console.log(`Question: ${val}`);
const readAnswer = () => readlineSync.question('Your answer: ');

const ifEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const maxScore = 3;
  let score = 0;

  while (score < maxScore) {
    const num = randomNumber();
    askQuestion(num);
    const usersAnswer = readAnswer();
    const correctAnswer = ifEvenNumber(num);

    if (usersAnswer === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default ifEvenGame;
