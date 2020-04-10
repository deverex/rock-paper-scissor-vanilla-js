var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

function getComputerChoice(){
  const choices = ['Rock','Paper','Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice,computerChoice){
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallComputerWord = 'computer'.fontsize(3).sub();
  result_div.innerHTML = `<p> ${userChoice}${smallUserWord} beats ${computerChoice}${smallComputerWord}. You Win! </p>`
  userScore += 1;
  userScore_span.innerHTML = userScore; 
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout( () =>  document.getElementById(userChoice).classList.remove('green-glow') ,300);
}

function lose(userChoice, computerChoice) {
  const smallUserWord = 'user'.fontsize(3).sub();
  const smallComputerWord = 'computer'.fontsize(3).sub();
  result_div.innerHTML = `<p> ${computerChoice}${smallComputerWord} beats ${userChoice}${smallUserWord}. Computer Win!</p>`;
  computerScore += 1;
  computerScore_span.innerHTML = computerScore; 
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow') , 300);

}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = '<p>It\'s a Draw</p>';
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() =>  document.getElementById(userChoice).classList.remove('gray-glow') , 300);

}


function game(userChoice) {
  const computerChoice = getComputerChoice();
  const winCheck = userChoice+computerChoice;
  console.log(winCheck);
  switch(winCheck){
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      win(userChoice, computerChoice);
    break;
    case "ScissorsRock":
    case "PaperScissors":
    case "RockPaper":
      lose(userChoice, computerChoice);
    break;
    case "ScissorsScissors":
    case "PaperPaper":
    case "RockRock":
      draw(userChoice, computerChoice);
  }
}

function main(){
  rock_div.addEventListener('click', () => {
    game('Rock');

  })

  paper_div.addEventListener('click', () => {
    game('Paper');
  })

  scissors_div.addEventListener('click', () => {
    game('Scissors');
  })
}

main();

