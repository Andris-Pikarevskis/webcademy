var fruits = ["Banana", "Cherry", "Mango", "Pinapple", "Avocado"];

for (var i = 0; i < fruits.length; i++) {
	console.log(`Index: ${i} Fruit: ${fruits[i]}`);
}

fruits.forEach(function (item, index) {
	console.log(`Index: ${index} Fruit: ${item}`);
})



var array = ["Banana", "Cherry", "Mango", "Pinaple", "Avocado"];
console.log("Массив", array);

array.unshift("carrot");
console.log("Массив", array);

array.push("potato");
array.push("onion");
console.log("Массив", array);

var array2 = array.slice(1, 6);
console.log("Массив2", array2);

array.forEach(function (item, index) {
	console.log("Индекс:", index, "Наименование:", item)
})

array2.forEach(function (item, index) {
	console.log("Массив 2 индекс:", index, "Наименование:", item)
})
