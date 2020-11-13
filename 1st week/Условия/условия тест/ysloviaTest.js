var markResult1 = 95;
var markResult2 = 118;
var markResult3 = 112;
var markAverage = (markResult1 + markResult2 + markResult3) / 3;

var polResult1 = 108;
var polResult2 = 92;
var polResult3 = 135;
var polAverage = (polResult1 + polResult2 + polResult3) / 3;

console.log(markAverage, polAverage);

if (markAverage > polAverage) {
	console.log("Mark team vins");
} else if (markAverage === polAverage) {
	console.log("Draw");
} else {
	console.log("Pol team vins");
}

var marryResult1 = 108;
var marryResult2 = 92;
var marryResult3 = 135;

var marryAverage = (marryResult1 + marryResult2 + marryResult3) / 3;

console.log(marryAverage);

if (markAverage > polAverage && markAverage > marryAverage) {
	console.log("Mark team vin");
} else if (polAverage > markAverage && polAverage > marryAverage) {
	console.log("Pol team vin");
} else if (marryAverage > polAverage && marryAverage > markAverage) {
	console.log("Marry team vin");
} else if (marryAverage === polAverage && polAverage > markAverage) {
	console.log("Marry and Pol teams vins");
} else if (markAverage === polAverage && polAverage > marryAverage) {
	console.log("Mark and Pol teams vins");
} else if (marryAverage === markAverage && polAverage > markAverage) {
	console.log("Marry and Mark teams vins");
} else {
	console.log("Draw");
}
