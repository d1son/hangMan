var letter = require("./letter.js");

var Word = function(wrd){
	this.word = wrd,
	this.lets = [],
	this.found = false,
	this.getLets = function(){
		for(var i = 0; i < word.length; i++){
			// this.lets.push pushes the letter entered into the empty array
			this.lets.push(new Letter(this.word[i]));
		}
	}
}