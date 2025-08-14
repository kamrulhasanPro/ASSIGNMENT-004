//* Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  let fareCalculate = fare + (fare * 20) / 100 + 30;
  return fareCalculate;
}

console.log(totalFine(200));
