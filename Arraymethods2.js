// let fruits = ["apple", "banana", "orange", "kiwi"];
// let citrus = fruits.slice(1, 3);  
// console.log(citrus);  // Output: ["banana", "orange"] --- 

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let citrus = fruits.slice(1, 2);  
// console.log(citrus);  // Output: ["banana"] because here orange will the last one so consdiered index 1

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let citrus = fruits.slice(0, 1);  
// console.log(citrus);  // Output: ["apple"]

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let citrus = fruits.slice(0, 3);  
// console.log(citrus);  // Output: ["apple", "banana", "orange"]

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let citrus = fruits.slice(1, 3);  
// console.log(citrus);  // Output: ["banana", "orange"]


// concat ---- imp

// let fruits = ["apple", "banana"];
// let moreFruits = ["orange", "kiwi"];
// let allFruits = fruits.concat(moreFruits);  
// console.log(allFruits);  // Output: ["apple", "banana", "orange", "kiwi"]

// let fruits = ["apple", "banana"];
// let moreFruits = ["banana", "apple"];
// let allFruits = fruits.concat(moreFruits);  
// console.log(allFruits);  // Output: ["apple", "banana", "banana", "apple"]


// indexof --- imp

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("banana");  
// console.log(index);  // Output: 1

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("orange");  
// console.log(index);  // Output: 2

// let fruits = ["apple", "banana", "orange"];
// let index = fruits.indexOf("apple");  
// console.log(index);  // Output: 0

// let fruits = ["apple", "banana", "orange", "Jackfruit"];
// let index = fruits.indexOf("Jackfruit");  
// console.log(index);  // Output: 3

// let fruits = ["apple", "banana"];
// let moreFruits = ["banana", "apple"];
// let allFruits = fruits.concat(moreFruits);  
// //console.log(allFruits);  // Output: ["apple", "banana", "banana", "apple"]
// let index = allFruits.indexOf("banana");
// console.log(index); // Output: 1


// let fruits = ["apple", "banana", "orange"];
// let hasBanana = fruits.includes("banana");
// console.log(hasBanana);  // Output: true

// let fruits = ["apple", "banana", "orange"];
// let hasBanana = fruits.includes("kiwi");
// console.log(hasBanana);  // Output: false

// let fruits = ["apple", "banana", "orange"];
// let fruitavailable = fruits.includes("apple");
// console.log(fruitavailable);  // Output: true

// let fruits = ["apple", "banana", "orange"];
// let fruitavailable = fruits.includes("kiwi");
// console.log(fruitavailable);  // Output: false


// reverse ---- v.imp

// let fruits = ["apple", "banana", "orange"];
// fruits.reverse();  
// console.log(fruits);  // Output: ["orange", "banana", "apple"]

// let fruits = ["apple", "banana", "orange" , "kiwi"];
// fruits.reverse();  
// console.log(fruits);  // Output: ['kiwi', 'orange', 'banana', 'apple']


// sort ----- v.imp

// let fruits = ["banana", "apple", "orange"];
// fruits.sort();  
// console.log(fruits);  // Output: ["apple", "banana", "orange"]

// let cars = ["zen", "xuv", "baleno", "altroz"];
// cars.sort();  
// console.log(cars);  // Output: ['altroz', 'baleno', 'xuv', 'zen'] --- output will be in alphabetical order

// let price = ["1999", "99", "499", "799"];
// price.sort();  
// console.log(price);  // Output: ['1999', '499', '799', '99'] --- it is sorting based on 1st character

// let price = [1999, 99, 499, 799];
// price.sort();  
// console.log(price);  // Output: [1999, 499, 799, 99] --- it is sorting based on 1st character

let price = [100, "apple", 99, 499, "banana", 799];
price.sort();  
console.log(price);  // Output: [] --- it is sorting based on 1st character of the variable


