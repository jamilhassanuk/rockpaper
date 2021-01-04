const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error plase use rock, paper or scissors.');
  }
}


const getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  if(num === 0){
    return 'rock';
  } else if(num === 1){
    return 'paper';
  } else {
    return 'scissors';
  }
}




const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Boooooom ..... user wins!';
  }
  
  if (userChoice === computerChoice) {
    return 'Game tied';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!'
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  }
}



//console.log(determineWinner('scissors', 'rock'));


const playGame = () => {
  let userChoice = getUserChoice('bomb');
  console.log(`User choice: ${userChoice}.`);
  let computerChoice = getComputerChoice();
  console.log(`Computer choice: ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();


