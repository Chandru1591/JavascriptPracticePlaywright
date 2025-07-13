// const add = (a, b) => a + b;
// console.log(add(3, 5));  // Output: 8

// const add = (a, b) => a - b;
// console.log(add(3, 5));  // Output: -2


// without parenthesis
// const greet = name => "Hello, " + name;
// console.log(greet("Bob"));  // Output: Hello, Bob

// with parenthesis
// const greet = (name) => "Hello, " + name;
// console.log(greet("Bob"));  // Output: Hello, Bob


// multiline arrow function with return type statement

// const multiply = (a, b) => {
//     let result = a * b;
//     return result;
// };

// console.log(multiply(2, 3));  // Output: 6


// multiline arrow function without return type statement

// const multiply = (a, b) => {
//     let result = a * b;
// };

// console.log(multiply(2, 3));  // Output: undefined ---> this is because return statement is not available


const multiply = (a, b) => {
    let result = a * b;
    results=result +  " :output";
    return result;
};

console.log(multiply(2, 3)); // Output: 6


// remove ; from each single line & run the same to check for output

const multiply = (a, b) => {
    let result = a * b
    results=result +  " :output"
    return result
}

console.log(multiply(2, 3)) // Output: 6