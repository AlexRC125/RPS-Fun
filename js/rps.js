let compChoice;
let userChoice;
let randomNum;
let numLimit = 9;

// Random Numbers (Inclusive 0-Exclusive range)
// Random Numbers
// FUNCTION: Generate a random number between 0 and 3
function getRandomNum(low, high){
 return Math.floor(Math.random() * (high - low)) + low;
}

randomNum = getRandomNum(0,3);
// TEST:
console.log(randomNum);

// Switch statements
function chooseMove(){
    switch(randomNum){
        case 0: 
        return "rock";
        break;
        case 1: 
        return "paper";
        break;
        case 2: 
        return "scissor";
        break;
        default:
        return "error";
         break;
    }
}
// Comparisons
function determineWinner(){
    if (userChoice === "rock" && compChoice === "paper")
    return "computer";
} 
    if (userChoice === "scissor" && compChoice === "paper"){
        return "user";
    }
    else if (userChoice === "paper" && compChoice === "scissor"){
    return "computer";
}
    else if (userChoice === "scissor" && compChoice === "rock"){
    return "computer";
    }
    else if(userChoice === compChoice){
        return "Its a tie"
    }
    else if (userChoice === "rock" && compChoice === "scissors"){
        return "User";
        }
        else if (userChoice === "paper" && compChoice === "rock"){
            return "user";
        }
// console logs

//console Logs

//PLAY
userChoice = chooseMove(getRandomNum())
console.log("User Chose:" + userChoice);

compChoice = chooseMove(getRandomNum(0,3))
console.log("Computer Chose: " + compChoice);

winner = determineWinner();
console.log("The winner is..." + winner);