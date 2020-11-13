var bobVeight = 56;
var bobHeight = 167;
var markVeight = 85;
var markHeight = 176;


var bobBmi = bobVeight / (bobHeight * bobHeight);
var markBmi = markVeight / (markHeight * markHeight);

var compareBmi = markHeight > markBmi

console.log(`thats is ${compareBmi} so Mark bmi is bigest than Bob`)