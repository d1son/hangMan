var prompt = require("prompt"); 
var Word = require("./word.js");

prompt.start() // this is required to use the prompt for npm

var game = { // create the game object with keys inside
	wordBank :["Broncos", "Panthers", "Warriors", "Lakers", "ESPN", "Football", "Basketball"] //insterted random wordbank words 
	this.guessRemaining = 10; //this. refers to the object it is a part of now, so .this in this case is referring to the variable/array "game"
	this.currentWrd = null;
	this.startGame = function(wrd){
		
	}
}