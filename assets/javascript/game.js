

//these are the variables that will appear on the screen

var win = 0;
var loss = 0;
var guess = 10;
var past = [];

//this is an alphabet array, the computer will get a letter from here for the user to guess.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



var winCount = document.getElementById("wins");
var lossCount = document.getElementById("losses");
var left = document.getElementById("left");
var guesses = document.getElementById("guesses");

//this variable gets a random letter from the alphabet Array
var computer = alphabet[Math.floor(Math.random() * alphabet.length)];
//this function checks if the button pressed matches one in an array
// fucntion checker(userGuess){
//     if (past.forEach === userGuess)
// }

//this function runs whenever the user presses a key

document.onkeyup = function (event) {
    //get a random letter from the computer

    console.log(computer);

    //accept an input from the user
    var userGuess = event.key;

    // past.push(userGuess);

    //print that guess to the screen
    // guesses.textContent = "Guesses so far: " + past;




    //if guesses left is greater than 0...
    if (guess > 0) {

        if (past.includes(userGuess) === false) {
            guesses.textContent = "Guesses so far: " + past;
            past.push(userGuess);



            //if user guesses correctly, give them and "Correct!" alert, and raise the win count by 1, assign "left" value to 10 and print to screenThen select a new random letter, and reset the past array.
            if (userGuess === computer) {
                alert("Correct!");
                win++;
                winCount.textContent = "Total Wins: " + win;
                guess = 10;
                left.textContent = "Guesses left: " + guess;
                computer = alphabet[Math.floor(Math.random() * alphabet.length)];
                past = [];
            }

            //if user guesses incorrectly, log the answer, decrease "left" by 1, 
            else if (userGuess != computer) {
                console.log(userGuess);
                guess--;
                left.textContent = "Guesses left: " + guess;
                if(guess === 0){
                    alert("Game Over");
                    loss++;
                    lossCount.textContent = "Loss Count: " + loss;
                    guess = 10;
                    computer = alphabet[Math.floor(Math.random() * alphabet.length)];
                    past = [];
                }

            }

        
            //if guesses = 0 then alert them that the game is over, add 1 to the loss count, and displey on screen. Then select a new random letter, and reset the past array
        //         else {
        //         alert("Game Over");
        //      loss++;
        //      lossCount.textContent = "Loss Count: " + loss;
        //      guess = 10;
        //      computer = alphabet[Math.floor(Math.random() * alphabet.length)];
        //      past = [];
        // }
    }}
}




//Questions so far. 
//How to get all the guesses to appear on the screen instead of just 1??
//How do I restart the loop after a loss or win?
//How to i select a new random letter after a win or loss?