'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No Enterd Number!!!');
    // document.querySelector('.message').textContent = 'No Enterd Number!!!';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You Win !!';
    displayMessage('You Win !!');
    document.querySelector('.number').value = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To High...' : 'To Low...');
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'To High...' : 'To Low...';
      score--;
      displayScore(score);
      //   document.querySelector('.score').textContent = score;
    } else {
      displayScore('You Lost');
      //   document.querySelector('.score').textContent = 'You Lost';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.score').textContent = score;
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
