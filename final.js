//* Problem-01 :
function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  let fareCalculate = fare + (fare * 20) / 100 + 30;
  return fareCalculate;
}


//* Problem-02 : 
function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = str.split(" ").join("").toUpperCase();
  return result;
}


//* Problem-03 :
function bestTeam(player1, player2) {
  // You have to write your code here
  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    Array.isArray(player1) ||
    Array.isArray(player2)
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


//* Problem-04 :
function isSame(arr1, arr2) {
  // You have to write your code here
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    return "Invalid";
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


//* Problem-05 : 
function  resultReport( marks ) {
    // You have to write your code here
    if(!Array.isArray(marks)){
        return "Invalid"
    }

    let totalMarks = 0;
    let passCount = 0;
    let failCount = 0;

    for(let mark of marks){
        totalMarks += mark;
        if(mark >= 40){
            passCount++;
        }else{
            failCount++
        }
    } ;

    let average = Math.round(totalMarks / marks.length) || 0 ;
    let result = {finalScore: average, pass: passCount, fail: failCount};
    return result;
}