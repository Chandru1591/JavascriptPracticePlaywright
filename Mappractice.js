// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 2);  
// console.log(doubled); // output - [ 2, 4, 6 ]

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num + 2);  
// console.log(doubled); // output - [ 3, 4, 5 ]

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num - 1);  
// console.log(doubled); // output - [ 0, 1, 2 ]

// let numbers = [1, 2, 3];
// let doubled = numbers.map(num => num * 99);  
// console.log(doubled); // output - [ 99, 198, 297 ]

// let numbers = [1, 2, 3, 4, 5, 6];
// let doubled = numbers.map(num => num + 2);  
// console.log(doubled); // output - [ 3, 4, 5, 6, 7, 8 ]

// let numbers = [-1, -2, -3];
// let doubled = numbers.map(num => num + 2);  
// console.log(doubled); // output - [ 1, 0, -1 ]


// Scenario: 👉 Use map() to convert a list of test input values into formatted test data objects.

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);