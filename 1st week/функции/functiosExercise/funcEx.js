function sayHello(name, time) {
	console.log(`Hello ${name}! have a good ${time}`);
}

sayHello("Mark", "day");
sayHello("Bob", "morning");


var markHeight = 1.7;
var markWeight = 72;
var markBMI = markWeight / (markHeight * markHeight);

var bobHeight = 1.8;
var bobWeight = 90;
var bobBMI = bobWeight / (bobHeight * bobHeight);

function calculateBMI(weight, height) {
	var bmi = weight / (height * height);
	console.log(bmi);
}

calculateBMI(bobWeight, bobHeight);

function caculateBMI(weight, height) {
	var bmi = weight / (height * height);
	return bmi;
}

var result = caculateBMI(markWeight, markHeight);
console.log(result);


// function declaration - можно вызывать перед тем как обьявлена
sum(5, 10);

function sum(a, b) {
	var result = a + b;
	console.log(result);
}

// function expresion - можно вызывать только после ее написагния
var substraction = function (a, b) {
	var result = a - b;
	console.log(result);
}

substraction(35, 20);