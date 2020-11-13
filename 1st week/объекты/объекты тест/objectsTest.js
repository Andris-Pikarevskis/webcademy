var robot1 = {
	name: "elektronik",
	releaseYear: 1985,
	country: "Russia",
	sayHello: function () {
		console.log(`Hello my name is ${this.name}`)
	},
	sayCoutry: function () {
		console.log(`I am from ${this.country}`)
	},
	birthYear: function (year) {
		var age = year - this.releaseYear;
		console.log(`My birth year is: ${this.releaseYear} i am ${age} years old`)
	},
};

console.log("robot1", robot1);
robot1.sayHello();
robot1.sayCoutry();
robot1.birthYear(2020);

function Robot(name, releaseYear, country) {
	this.name = name;
	this.releaseYear = releaseYear;
	this.country = country;
	this.sayHello = function () {
		console.log(`Hello my name is ${this.name}`)
	};
	this.sayCoutry = function () {
		console.log(`I am from ${this.country}`)
	};
	this.birthYear = function (year) {
		var age = year - this.releaseYear;
		console.log(`My birth year is: ${this.releaseYear} i am ${age} years old`)
	};
};

var robot2 = new Robot(
	"T1000",
	1987,
	"Japan"
);

console.log("Robot2", robot2);
robot2.sayHello();
robot2.sayCoutry();
robot2.birthYear(2020);

var robot3 = new Robot(
	"BostonDynamics",
	2018,
	"USA"
);

console.log("Robot3", robot3);
robot3.sayHello();
robot3.sayCoutry();
robot3.birthYear(2020);

// робот пылесос ******* ROBOT MAID **************

var robotMaid = {
	name: "Laura",
	capacity: 100,
	energy: 100,
	actions: [
		{
			name: "cleaning",
			cost: 20
		},
		{
			name: "breakfest",
			cost: 5
		},
		{
			name: "lunch",
			cost: 15
		},
		{
			name: "diner",
			cost: 10
		},
		{
			name: "shoping",
			cost: 60
		}
	],

	makeAction: function (nameAction) {
		var currentCost;
		this.actions.forEach(function (item) {
			if (item.name == nameAction) {
				currentCost = item.cost;
			}
		});
		
		if (currentCost === undefined) {
			console.log("This action does not exist.");
			return;
		}

		console.log(`I start action: ${nameAction}`);

		this.energy = this.energy - currentCost;
		console.log("remaining energy", this.energy,"%");

		if (this.energy > 0) {
			console.log(`I end task: ${nameAction}`);
		} else if (this.energy === 0) {
			console.log(`I end task: ${nameAction}`);
			console.log(`I'm out of energy`);
		} else {
			console.log(`I'm dischaged and can't complete task: ${nameAction}`);
		};

		console.log(`I end action: ${nameAction}`);
	},

	
}

robotMaid.getEnergy = function () {
	this.energy = this.capacity;
	console.log(`I am charged. I have ${this.energy} % of energy`)
}

robotMaid.makeActionImproved = function (nameAction) {
  var currentCost;

  this.actions.forEach(function (item) {
    if (item.name == nameAction) {
      currentCost = item.cost;
    }
  });
	
	if (currentCost > 0) {

		if (this.energy < currentCost) {
			console.log(`I dont have inaf energy, i need charge`);
			console.log(`I have little ${this.energy} % of energy.`);
			var delta = currentCost - this.energy;
			console.log(`I need ${delta}% of energy.`);
		} else {
			console.log(`I start task: ${nameAction}`);
			console.log(`I end task: ${nameAction}`);
			this.energy = this.energy - currentCost;
			console.log(`remaining energy: ${this.energy}`);
		}
	} else {
		console.log("This action dont exist");
	};
} 


robotMaid.actionList = function (...action) {
	if (Array.isArray(action[0])) {
		action[0].forEach(function (item) {
			robotMaid.actionList(item);
		});
	} else {
		action.forEach(function (item) {
		robotMaid.makeActionImproved(item);
		});
	}
};

robotMaid.actionList(["shoping", "cleaning", "breakfest", "lunch", "diner", "purchases"]);
robotMaid.getEnergy();


robotMaid.makeActionImproved("shoping");
robotMaid.makeActionImproved("cleaning");
robotMaid.makeActionImproved("breakfest");
robotMaid.makeActionImproved("lunch");
robotMaid.makeActionImproved("diner");
robotMaid.getEnergy();
robotMaid.makeActionImproved("purchases");
console.log("Laura", robotMaid)
