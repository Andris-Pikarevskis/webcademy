// var fruits = ["banana", "apple", "peach", "pinapple", "cherry", "strawberry"]
// // console.log(fruits);

// // console.log(fruits[3]);
// // console.log(fruits[0]);

// // console.log(fruits.length);

// // for (var i = 0; i < fruits.length; i++) {
// // 	console.log(fruits[i]);
// // }

// // fruits.forEach(function (item, index) {
// // 	//console.log(item, index);
// // 	console.log(`element ${item} have index ${index}`);
// // });

// console.log(fruits.length);
// console.log(fruits[2]);
// fruits[2] = "mango";
// console.log(fruits[2]);

// var newSize = fruits.push("lime");
// console.log(fruits);
// console.log(newSize);

// var deleteItem = fruits.pop(); //pop - удаляет последний елемент
// console.log(fruits);
// console.log(deleteItem);

// var first = fruits.shift(); // shift - удфляет первый елемент
// console.log(fruits);
// console.log(first);

// newSize = fruits.unshift("pinapple"); // unshift - делает выбранный обьект первым в массиве
// console.log(fruits);
// console.log(newSize);

// var fruits = ["banana", "apple", "peach", "pinapple", "cherry", "strawberry"]
// console.log(fruits);

// var posittion = fruits.indexOf("banana");
// console.log(posittion);

// // удаление елементов и добавление
// fruits.splice(1, 1);
// console.log(fruits);

// // удаление нескольких елементов, начиная с определенного индекса
// fruits.splice(1, 3);
// console.log(fruits);

var fruits = ["banana", "apple", "peach", "pinapple", "cherry", "strawberry"]
console.log("fruits", fruits);

var newArray = fruits.slice(2); // копирует с елемента под индексом 2
console.log("newAray", newArray);

var newArray2 = fruits.slice(1, 4);
console.log("newArray2", newArray2);

var newArray3 = fruits.slice();
console.log("newArray3", newArray3);