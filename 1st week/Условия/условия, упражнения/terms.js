var markAge = 9;


if (markAge > 18) {
	console.log("Ypu are oldes than 18, you can go to moovie");

} else if (markAge >= 14) {
	console.log("You are can go to moovie with you parents");
} else {
	console.log("You are no 14, you can not enter");
}

var isFullAge = true;

if (isFullAge) {
	console.log("you can drive car");
} else {
	console.log("you cen not drive car");
}

var mark = "5";

if (mark == 10) {
	console.log("comparison true");
} else {
	console.log("comparison false");
}

/* **********
Bolean logics
***** */

var num = 15;

if (num > 10 && num < 20) {
	console.log("var num are between 10 & 20");
}

var num2 = 9;
if (num2 < 10 || num2 > 20) {
	console.log("variable does not belong to this array");
}

/* **********
Тернарный оператор
***** */

var number = 8;

number > 10 ? console.log("number > 10") : console.log("number < 10");

var markAge = 20;
var isFullAge = markAge >= 18 ? true : false; // - лучше true, false, их потом можно обработать
console.log(isFullAge);

/* **********
switch case
***** */

var mark = 4;

switch (mark) {
	case 5:
		console.log("great! god job!");
		break;
	case 4:
		console.log("nice result!");
		break;
	case 3:
		console.log("You can better!");
		break;
	case 2:
		console.log("Bad!");
		break;
	case 1:
		console.log("very bad!");
		break;
	default:
		console.log("This mark does not exist");
}

var number = 24;

switch (true) {
	case number > 18 && number < 30:
		console.log("number 18 > and <30");
		break;
	case number > 50 && number < 70:
		console.log("number > 50 & < 70");
		break;
	default:
		console.log("default value");
}
