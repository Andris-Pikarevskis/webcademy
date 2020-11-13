var peter = {
	name: "Peter",
	secondName: "Vasiliev",
	birthYear: 1991,
	job: "driver",
	isMarried: true,
	sayHello: function () {
		console.log(`Hello all! My name is ${this.name}.` )
	},
	changeJob: function (newJob) {
		this.job = newJob;
		console.log(`My new profession: ${this.job}`);
	},
	calculeteAge: function (year) {
		var calcAge = year - this.birthYear;
		this.age = calcAge;
	}
};

// console.log(peter.name);
// console.log(peter.birthYear);
// console.log(peter["job"]); //- иногда можно обращаться к объекту через [] в некоторых случаях

peter.sayHello();
peter.changeJob("Designer");
console.log(peter.age);
peter.calculeteAge(2020);
console.log(peter.age);
console.log(peter);


// var mary ={};
var mary = new Object();
mary.name = "Marry";
mary.secondName = "Vasilieva";
mary.birthYear = 1993;
console.log(mary);



//**************** */ Objects, constructor
var Andy = {
	name: "Andy",
	secondName: "Ivanov",
	birthYear: 1989,
	job: "Shop asistant",
	isMarried: false
}

function Person(name, secondName, birthYear, job, isMarried) {
	this.name = name;
	this.secondName = secondName;
	this.birthYear = birthYear;
	this.job = job;
	this.isMarried = isMarried;
	this.sayHello = function () {
		console.log(`Hallo all, my name is ${this.name}`);
	};
	this.age = 2020 - birthYear;
}


var vasiliy = new Person(
	"Vasiliy",
	"Utkin",
	1985,
	"web-deweloper",
	false
);

console.log(vasiliy);
vasiliy.sayHello();

var julia = new Person(
	"Julia",
	"Strelkova",
	1992,
	"designer",
	false
);
console.log(julia);
julia.sayHello();
