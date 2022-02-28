'use strict'
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to get the value use .value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//event listener - things happening on the browser, click, keyboard press

//event handler function- second paramenter of the event listener
//pass in a second function

//select the button using querySelector
//used the addEventListener method to attach an event handler
//the first argument is the 'click' the second argument is the event handler (function)
//the event handler is the function 

// the function will on the be called after the even listener has happened

const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
// also called the state variable because the score is part of the application state



document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	//console.log(guess, typeof guess);




	//when there is no input
	//0 = falsey, so add the negate property to convert it to true 
	if(!guess){
	//this is now true, so if it is a falsy value(0) execute)
		document.querySelector('.message').textContent = '⛔ No Number';

	//when players wins	
	} else if (guess === secretNumber){
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;

		//select the body(no dot) then from the 'style' choose the backgrounColor property
		//this is an inline style, meaning it is applied directly on the html, not changing the css file.
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width='30rem';

	//when guess is too high	
	} else if (guess > secretNumber){
		if(score > 1){
			document.querySelector('.message').textContent = '📈 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}

	//when guess is too low	
	} else if (guess < secretNumber){

		if(score > 1){
			document.querySelector('.message').textContent = '📉 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
			document.querySelector('.score').textContent = 0;
		}
	}	
});





document.querySelector('.again').addEventListener('click', function(){
	const secretNumber = Math.trunc(Math.random()*20) + 1;

	document.querySelector('.number').value = secretNumber;

	document.querySelector('body').style.backgroundColor ='#222';

	document.querySelector('.number').style.width ='15rem';


console.log(secretNumber);
});












