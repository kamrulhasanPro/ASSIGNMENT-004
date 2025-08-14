//* Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }

  let result = str.split(" ").join("").toUpperCase();
  return result;
}

console.log(onlyCharacter(true));



// another way 
function onlyCharacter1(string) {
  if (typeof string !== "string") {
    return "Invalid";
  }

  let newStr = "";
  for (let str of string) {
    if (!str.includes(" ")) {
      newStr += str;
    }
  }
  return newStr.toUpperCase();
}
console.log(onlyCharacter1("Serv er : : Do wn"));
