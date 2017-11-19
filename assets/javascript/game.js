
 //creating a variable and Arrays to hold data 
  var songTitle = ["waterfalls", "sabotage", "regulate", "juicy", "buddyholly", "closer"];    
  var selectedWord = " ";
	var LettersinWord = [];
	var numBlanks = 0;
	var blankAndSuccesses = [];
   var wrongLetters = [];

   // Game Counters
   var winCount = 0;
   var lossCount = 0;
   var guessesLeft = 10;
   
   //functions
  // -------------------------------------------------//

   function startGame () {
    selectedWord = songTitle[Math.floor(Math.random() * songTitle.length)];
    LettersinWord = selectedWord.split("");
    numBlanks = LettersinWord.length;

// Reset 
  guessesLeft = 10;
  wrongLetters = [];
  blankAndSuccesses = [];

  // Populate blanks and success with right number of blanks
  for (var i=0; i<numBlanks; i++){
    blankAndSuccesses.push("_");
  }

  //Change HTML to reflect conditions
  document.getElementById("currentWord").innerHTML = blankAndSuccesses.join(" ");
  document.getElementById("guessesRemaining").innerHTML = guessesLeft;
  document.getElementById("wins").innerHTML = winCount;
  document.getElementById("loss").innerHTML = lossCount;
  document.getElementById("guessedLetter").innerHTML = wrongLetters;

    // debugging
    console.log(selectedWord);
    console.log(LettersinWord);
    console.log(numBlanks);
    console.log(blankAndSuccesses);

  }

  function checkLetters(letter) {

 //Check if letter exists in code at all

 var isLetterInWord = false;

  for (var i=0; i<numBlanks; i++){
  if(selectedWord[i] == letter) {
   isLetterInWord = true;

     }

   }
 
// check where in word letter exists, then populate out blankAndSuccesses array.
  if(isLetterInWord) {
    for(var i=0; i<numBlanks; i++) {
      if(selectedWord[i] == letter) {
         blankAndSuccesses[i] = letter;

        }

      }

 }
 // Letter wasn't found

  else {
      wrongLetters.push(letter);
      guessesLeft--;

 }

// testing and debugging
  console.log(blankAndSuccesses);

  }

   function roundComplete(){
   console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

 


  // Update the HTML to reflect the most recent count stats

  document.getElementById("guessesRemaining").innerHTML = guessesLeft;
  document.getElementById("currentWord").innerHTML = blankAndSuccesses.join(" ");
  document.getElementById("guessedLetter").innerHTML = wrongLetters.join(" ");

  // Check if user won

  if (LettersinWord.toString() == blankAndSuccesses.toString()) {
     winCount++;
  

  //update the win counter in the HTML

   document.getElementById("wins").innerHTML = winCount;
   startGame();

  }
   else if (guessesLeft == 0) {
         lossCount++;
    

    // Update the HTML
    document.getElementById("loss").innerHTML = lossCount;

    startGame();


  }

}

    



  //Main Process
 // --------------------------------------------------------------
 //Initiate the code the first time
 startGame();


  // Register Keyclicks

 document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

 // Debugging
  console.log(letterGuessed);

}





