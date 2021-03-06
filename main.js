var prompt = require("prompt"); 
var Word = require("./word.js");

prompt.start() // this is required to use the prompt for npm

var game = { // create the game object with keys inside
	wordBank :["Broncos", "Panthers", "Warriors", "Lakers", "ESPN", "Football", "Basketball"] //insterted random wordbank words 
	this.guessRemaining = 10;
	this.currentWrd = null;
	this.startGame = function(wrd){
		var randWord = Math.floor(Math.random() * this.wordBank.length)
		this.currentWrd = new Word(this.wordBank[randWord]);
		this.currentWrd.getLets(); //not too sure here
		this.keepPromptingUser; //not too sure here
	}
	this.keepPromptingUser : function(){
		var self = this; //self will now hold the value 'this' in order to keep it in scope
		prompt.get(["guessLetter"], function(err, result){
			console.log("The letter or space you guessed is " + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter)
			if(findHowManyOfUserGuess === 0){
				console.log("Your guess is WRONG!!");
				self.guessRemaining--;
			}
			else{
				console.log("Your guess was RIGHT!!");
				if(self.currentWrd.didWeFindTheWord() === true){
					console.log("YOU WON!!");
					return 1; //end the game?
				}
				else{
					console.log("Guesses remaining: " + guessRemaining);
					console.log(this.currentWrd.wordRender());
				}
			}
			if(self.guessRemaining > 0 && self.currentWrd.found === false){
				keepPromptingUser;
			}
			else if(self.guessRemaining === 0){
				console.log("Game Over Bro!" + self.currentWrd.word);
			}
			else{
				console.log(self.currentWrd.wordRender()); // followed the instructions on learner nation, not sure if it will work
			}
		});
	}
}

game.startGame()
