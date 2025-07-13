// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0);  
// console.log(sum); // output -- 10

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 1);  
// console.log(sum); // output -- 11

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 2);  
// console.log(sum); // output -- 12

// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 10);  
// console.log(sum); // output -- 20


// let results = ['pass', 'fail', 'pass'];
// let passCount = results.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
// console.log(passCount); // OUTPUT -- 2

// imp for interview

let results = ['pass', 'fail', 'pass'];
let passCount = results.reduce((acc, r) => r === 'fail' ? acc + 1 : acc, 0);
console.log(passCount); // OUTPUT -- 1

