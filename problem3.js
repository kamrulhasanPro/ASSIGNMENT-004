//* Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  // You have to write your code here
  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    !Array.isArray(player1) ||
    !Array.isArray(player2)
  ) {
    return "Invalid";
  }

  let player1FRY = player1.foul + player1.cardY + player1.cardR;
  let player2FRY = player2.foul + player2.cardY + player2.cardR;

  if (player1FRY > player2FRY) {
    return player2.name;
  } 
  else if (player1FRY < player2FRY) {
    return player1.name;
  } 
  else {
    return "Tie";
  }
}

console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
