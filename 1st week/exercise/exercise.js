/*-----------------переменные типы данных------------------*/

/*var hello = "hello world";
var year = 2020;



console.log(hello + " " +year)


var name = "Yurij"
var age = 33
var isFullAge = true;

var job;
console.log(job);

job = "web-developer"
console.log(job);
	
job = null
console.log(job);*/

/* *************** МУтации и привидение типов данных *************** */

// var name = "Peter";
// var age = 30;

// // console.log(name);
// // console.log(age);

// console.log(name + " " + age);

// var job, isMarried;
// job = "driver";
// isMarried = false;
// console.log(isMarried);

// console.log(name + age + isMarried);
// console.log(`${name} ${age} ${isMarried}`);

// var name = "Bob",
//   age = 20,
//   city = "Moscov";

// console.log(city);
// var yearJohn, yearBob;
// var year = 2020;
// var ageJohn = 26;
// var ageBob = 37;
// var bobName = "Bob"

// yearJohn = year - ageJohn;
// yearBob = year - ageBob;

// console.log(yearJohn);
// console.log(yearBob);

// console.log(year / 8);
// // логический оператор
// var isJohnOlderThanBob = ageJohn > ageBob;
// console.log(isJohnOlderThanBob);

// // оператор typeof
// console.log(typeof "text");
// console.log(typeof bobName);
// console.log(typeof ageJohn);
// console.log(typeof isJohnOlderThanBob);

// ********** Приоритет операторов ***///

var year = 2020;
var yearJohn = 1991;
var fullAge = 18;

var isFullAge = year - yearJohn >= fullAge;
console.log(isFullAge);

// групировка 
var ageJohn = year - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average)

// мнрдественное присвоение
var x, y;
x = y = (3 + 5) * 7 - 8;
console.log(x, y);

var d = 10;
d++;
console.log(d);
d--;
console.log(d);

d += 5; //d = d + 5;
console.log(d);

d *= 3
console.log(d);
