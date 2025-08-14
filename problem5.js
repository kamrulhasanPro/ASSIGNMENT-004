//* Problem-05: Exam Result Report Generator
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

console.log(resultReport(100))
