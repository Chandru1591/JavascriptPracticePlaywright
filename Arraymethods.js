// let fruits = ["apple", "banana"];
// fruits.push("orange");  
// console.log(fruits);  // Output: ["apple", "banana", "orange"]

// let cars = ["Creta" , "venue"];
// cars.push("Breazza");
// console.log(cars); // output: ["Creta", "venue", "brezza"]


// let fruits = ["apple", "banana", "orange"];
// let removedFruit = fruits.pop();  
// console.log(removedFruit);  // Output: "orange"
// console.log(fruits);  // Output: ["apple", "banana"]

// let cars = ["Bolero", "Scorpion", "Thar"];
// let removecar = cars.pop();
// console.log(removecar); // Output: "Thar"
// console.log(cars); // Output: ["Bolero" , "Scorpion"]


// let fruits = ["apple", "banana", "orange"];
// let firstFruit = fruits.shift();  
// console.log(firstFruit);  // Output: "apple"
// console.log(fruits);  // Output: ["banana", "orange"]

// let city = ["Mumbai", "mysore", "Bengaluru"]
// let firstcity = city.shift();
// console.log(firstcity);
// console.log(city);

// let fruits = ["banana", "orange"];
// fruits.unshift("apple");  
// console.log(fruits);  // Output: ["apple", "banana", "orange"]


//let fruits = ["apple", "banana", "orange"];
// Removes 1 element at index 1, and inserts "kiwi" at index 1
//fruits.splice(1, 1, "kiwi");  
//console.log(fruits);  // Output: ["apple", "kiwi", "orange"]

// let fruits = ["apple", "banana", "orange"];
// // Removes 0 element at index 0, and inserts "kiwi" at index 0
// fruits.splice(0, 0, "kiwi");  
// console.log(fruits);  // Output: ["kiwi", "apple", "banana", "orange"]

// let fruits = ["apple", "banana", "orange"];
// // Removes 2 element at index 2, and inserts "kiwi" at index 2
// fruits.splice(2, 2, "kiwi");  
// console.log(fruits);  // Output: ["apple", "banana", "kiwi"]

// let fruits = ["apple", "banana", "orange", "Grapes"];
// // Removes 0 element at index 0, and inserts "kiwi" at index 0
// fruits.splice(0, 0, "kiwi");  
// console.log(fruits);  // Output: ["kiwi", "apple", "banana", "orange", "Grapes"]

let fruits = ["apple", "banana", "orange", "Grapes"];
// Removes 0 element at index 0, and inserts "kiwi" at index 0
fruits.splice(3, 3, "kiwi");  
console.log(fruits);  // Output: ["apple", "banana", "orange", "kiwi"]