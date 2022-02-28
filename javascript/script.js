'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.number').textContent;

const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
		const guess = Number(document.querySelector('.guess').value);
		//to get the value of an input (.value)

		if(!guess){
			document.querySelector('.message').textContent='⛔ No Number';
			displayMessage('⛔ No Number');
		} else if (guess === secretNumber) {
			displayMessage('🎉 Correct Number');

			document.querySelector('.number').textContent = secretNumber;
			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width = '30rem';

			if(score > highscore){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
			
	
		} else if (guess != secretNumber){
			guess > secretNumber ? displayMessage('Too High'):  displayMessage('Too Low')
			score--;

			if (score > 1){
				document.querySelector('.score').textContent = score 
			} else {
				document.querySelector('.score').textContent = 0;
				displayMessage('You Lost');
			}

		}	

});

document.querySelector('.again').addEventListener('click', function(){
	score = 20;
	secretNumber = Math.trunc(Math.random()*20) + 1;
	document.querySelector('.score').textContent = score;

	displayMessage('Start Guessing...')


	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';

	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';

});

		
