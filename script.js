'use strict';

let msg = document.querySelector('.message');
let number = document.querySelector('.number');
let hiScore = document.querySelector('.highscore');
let scor = document.querySelector('.score');

// bira broj izmedju 0 i 20
let secretNumber = Math.trunc(Math.random() * 40) + 1;
let score = 20;
let highscore = 0;

//funkcija da se pise poruka u div
const displayMessage = function (message) {
  msg.textContent = message;
};

let button = document
  .querySelector('.check')
  .addEventListener('click', function () {
    //da se pretvori broj iz inputa u number,jer je string
    const guess = Number(document.querySelector('.guess').value); //broj iz inputa,pretvoren u number

    // Kad je input prazan
    if (!guess) {
      displayMessage('⛔️ No number!');
    }
    // Kada igrac pogodi broj
    else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!'); //da napise tacan broj
      number.textContent = secretNumber; //da se pokaze sekret broj umesto znaka pitanja

      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';

      // da se racuna highskor
      if (score > highscore) {
        //ako je skor veci od highskora
        highscore = score; //onda pisi u highskor value iz skora
        hiScore.textContent = highscore; //u div highskor da pise ovo gore
      }
    }
    // Kad pogresi broj
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        scor.textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        scor.textContent = 0;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 40) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
