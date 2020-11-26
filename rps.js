function robot() {
    let arr = ["rock", "paper", "scissors"];
    let player1 = document.getElementById("player1").value;
    player2.innerHTML = arr[Math.floor(Math.random() * arr.length)];
    if (player1 === "") {
      alert("You must choose first");
      return (player2.innerHTML = "Click to see what the robot chose");
    }
  }
  
  function rockPaperScissors() {
    let player1 = document.getElementById("player1").value;
    let player2 = document.getElementById("player2").innerHTML;
  
    if (
      (player1 === "rock" && player2 === "paper") ||
      (player1 === "paper" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "rock")
    ) {
      alert("THE ROBOT WON!");
      return;
    } else if (
      (player2 === "rock" && player1 === "paper") ||
      (player2 === "paper" && player1 === "scissors") ||
      (player2 === "scissors" && player1 === "rock")
    ) {
      alert("YOU WON!");
      return;
    } else if (
      (player1 === "rock" && player2 === "rock") ||
      (player1 === "paper" && player2 === "paper") ||
      (player1 === "scissors" && player2 === "scissors")
    ) {
      alert("Tie Game");
      return;
    }
  
    alert("Please choose");
}

function reset() {
  player1.value = "";
  player2.innerHTML = "Click to see what the robot chose"
  return;
}