// example 1

// function* generatorFunction() {
//     yield 'Hello';
//     yield 'World';
//     yield '!';
//   }
  
//   // Using the generator function
//   const iterator = generatorFunction(); // iterator will call the next function i.e., genratorfunction
  
//   console.log(iterator.next().value); // Outputs: Hello
//   console.log(iterator.next().value); // Outputs: World
//   console.log(iterator.next().value); // Outputs: !

// example 2

//  function* Username(){
//  yield 'Firstname';
//  yield 'Lastname';
//   }
  
//  const iterator = Username();

//  console.log(iterator.next().value); // Outputs: Firstname
//  console.log(iterator.next().value); // Outputs: Lastname

// example 3

// Generator function to generate squares of numbers up to a limit
function* squareGenerator(limit) {
    for (let i = 1; i <= limit; i++) {
      yield i * i;  // Pause and return the square of i
    }
  }
  
  // Using the generator function
  const squares = squareGenerator(5);
  
  console.log(squares.next().value); // Outputs: 1  (1*1)
  console.log(squares.next().value); // Outputs: 4  (2*2)
  console.log(squares.next().value); // Outputs: 9  (3*3)
  console.log(squares.next().value); // Outputs: 16 (4*4)
  console.log(squares.next().value); // Outputs: 25 (5*5)
  console.log(squares.next().done);  // Outputs: true (no more values)
  