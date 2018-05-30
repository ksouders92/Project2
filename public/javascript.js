//Alert Welcoming to Game


alert('Welcome to Hangman Florida Edition');




//===================================================================================

// Letters Bank A-Z used to guess letters in Word
var letters =  ['a', 'b', 'c',
				'd', 'e', 'f',
				'g', 'h', 'i',
				'j', 'k', 'l',
				'm', 'n', 'o',
				'p', 'q', 'r',
				's', 't', 'u',
				'v', 'w', 'x',
					'y', 'z'
							];





//Word Bank for all the possible word choices
var wordBank = ['Sunshine', 'Miami', 'Orlando', 'Tampa', 'Disney', 'Tampa', 'Fish', 'Beach', 'Lakes', 'Summer', 'Tallahassee'];
//Chooses the Random Number for the Hangman Game converted into words//

//array of the correct words to be guessed in Hangman game//

var wordChoice = "";

//Dictates the number of letters in a word 

var LettersInTheWord = [];

// number of spaces needed for each word value of var set to 0

var blanksNeeded = 0;

//holds blanks and Correct Letter

var blanksAndCorrectLetterGuesses = [];

// var used for wrong letter guess

var incorrectLetters = [];
//================================================
//COUNTERS to keep track of the score of game

//Keeps track of  the number of wins with a value set to zero

var numberOfWins = 0;

//Keeps track of the number of game losses witha value set to Zero

var numberOfGamesLost = 0;

// Number of Remaining Guesses for game value set  
//at 6 so dificulty is hard///9 Would be easier game

var numberOfRemainingGuesses = 6;

//The Number of Correct Guesses in Game

var correctGuessCounter = 0;

wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
// We are checking that there is a random word to be generated
console.log (wordChoice)

// 
//=======================================================================================
//FUNCTIONS OF Java Hangman Game

//Reset and start the game from Scrach 

function reset()

{
// Generates a randomly chosen word from the Wordbank
//
wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];



//The split() method is used to split a string into an array of substrings, and returns the new array.

LettersInTheWord = wordChoice.split('');

/// Generates the Number of blanks giving a value equal
blanksNeeded = LettersInTheWord.length;

//Reset the game

//=================================================

LettersAlreadyGuessed = 0;

correctGuessCounter = 0;

numberOfRemainingGuesses = 6;

incorrectLetters= [];

blanksAndCorrectLetterGuesses = [];

letters = ['a','b','c',

					  'd','e','f',

					  'g','h','i',

					  'j','k','l',

					  'm','n','o',

					  'p','q','r',

					  's','t','u',

					  'v','w','x',

					  'y','z'];

	test=false;

	startTheGame();

}

function startTheGame()

{

// Generates a randomly chosen word from the Wordbank
//
wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];



//The split() method is used to split a string into an array of substrings, and returns the new array.

LettersInTheWord = wordChoice.split('');

/// Generates the Number of blanks
blanksNeeded = LettersInTheWord.length;

//Reset the game

//=================================================



correctGuessCounter = 0;

numberOfRemainingGuesses = 6;

incorrectLetters= [];

blanksAndCorrectLetterGuesses = [];

letters = ['a','b','c',

					  'd','e','f',

					  'g','h','i',

					  'j','k','l',

					  'm','n','o',

					  'p','q','r',

					  's','t','u',

					  'v','w','x',

					  'y','z'];

	//Fill the Blanks with letters

for(var i = 0; i< blanksNeeded; i++)

	

	{

		blanksAndCorrectLetterGuesses.push('_');

		document.getElementById('wordsToGuess').innerHTML = blanksAndCorrectLetterGuesses;

	}



	//Changes in html doc 

	document.getElementById('wordsToGuess').innerHTML = blanksAndCorrectLetterGuesses.join(' ');

	document.getElementById('numGuesses').innerHTML = numberOfRemainingGuesses;

	document.getElementById('winCounter').innerHTML = numberOfWins;

	document.getElementById('lossCounter').innerHTML = numberOfGamesLost;

	document.getElementById('IncorrectGuess').innerHTML = incorrectLetters;

	

}

//creates a function to compare letters 

function compareLetters(userKey)

{

				

				//If the letter matches one in the word of choice

				if(wordChoice.indexOf(userKey) > -1)

				{

					//Loops depending on the amount of blanks 

					for(var i = 0; i < blanksNeeded; i++)

					{

						//Fills in right index with user key

						if(lettersInTheWord[i] === userKey)

						{

							correctGuessCounter++;

							blanksAndCorrectLetterGuesses[i] = userKey;

							document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');

						}	

					}

				

				}

				//Wrong Keys

				else

				{

					incorrectLetters.push(userKey);

				      numberOfRemainingGuesses--;

					//Changes HTML

					document.getElementById('numGuesses').innerHTML = numberOfRemainingGuesses;

					document.getElementById('wrongGuesses').innerHTML = incorrectLetters;

					


				}

			

			

		

}

function winLose()

{

	// When number blanks if filled with right words then you win

	if(correctGuessCounter === blanksNeeded)

	{

		//Counts Wins 

		numberOfWins++;

		///document communicates with the html 

		document.getElementById('winCounter').innerHTML = numberOfWins;

		alert('You Win');

		reset();

	}

	// When number of Guesses reaches 0 then You lose

	else if(numberOfRemainingGuesses === 0)

	{

		//Counts losses

		numberOfGamesLost++;

		//Changes HTML

		document.getElementById('lossCounter').innerHTML = numberOfGamesLost;

		alert('You Lose');

		reset();

	}

}



//MAIN PROCCESS

//-------------------------------------------	

//Initiates the Code





document.onkeyup = function(event)

{

	test = true;

	var LettersAlreadyGuessed = event.key;

	for(var i = 0; i < letters.length; i++)

	{	

		if(LettersAlreadyGuessed === letters[i] && test === true)

		{

			var spliceDword = letters.splice(i,1);

		
	

			compareLetters(LettersAlreadyGuessed);

			winLose();

		}

	}		

		

}