// Good Luck! You got this 💪🏾
// Write your code here.

function playGame(player1, player2) {
  if (player1 === "scissors" && player2 === "paper") {
    return `player1 wins`;
  } else if (player1 === "paper" && player2 === "scissors") {
    return "player2 wins";
  } else if (player1 === "rock" && player2 === "paper") {
    return "player2 wins";
  } else if (player1 === "paper" && player2 === "rock") {
    return "player1 wins";
  } else if (player1 === "rock" && player2 === "scissors") {
    return "player1 wins";
  } else if (player1 === "scissors" && player2 === "rock") {
    return "player2 wins";
  } else player1 === player2;
  return "It's a tie";
}

console.log(playGame("rock", "papers"));
