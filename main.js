var prompt = require("prompt"); 
var Word = require("./word.js");

prompt.start() // this is required to use the prompt for npm

var game = { // create the game object with keys inside
	wordBank :["Broncos", "Panthers", "Warriors", "Lakers", "ESPN", "Football", "Basketball"] //insterted random wordbank words 
	this.guessRemaining = 10; //this. refers to the object it is a part of now, so .this in this case is referring to the variable/array "game"
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
		})
	}
}

