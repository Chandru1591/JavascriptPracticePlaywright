// 1
// function Person(name, age) {
//     this.name = name;  // 'this' refers to the new object created
//     this.age = age;
//   }
  
//   // Creating objects using the constructor function
//   const person1 = new Person('John', 30);
//   const person2 = new Person('Jane', 25);
  
//   console.log(person1.name); // Outputs: John
//   console.log(person2.age);  // Outputs: 25


// 2
//   function Person(name, age) {
//     this.name = name;  // 'this' refers to the new object created
//     this.age = age;
//   }
  
//   // Creating objects using the constructor function
//   const person1 = new Person('John', 30);
//   const person2 = new Person('Jane', 25);
  
//   console.log(person1); // Outputs: Person { name: 'John', age: 30 }
//   console.log(person2);  // Outputs: Person { name: 'Jane', age: 25 }


// new --- will help to creat new object of similar type

// 3
// function Person(name, age) {
//     this.name = name;  // 'this' refers to the new object created
//     this.age = age;
//   }
  
//   // Creating objects using the constructor function
//   const person1 = new Person('John', 30);
//   const person2 = new Person('Jane', 25);
//   const person3 = new Person('Jack', 29);

  
//   console.log(person1);  // Outputs: Person { name: 'John', age: 30 }
//   console.log(person2);  // Outputs: Person { name: 'Jane', age: 25 }
//   console.log(person3);  // Outputs: Person { name: 'Jack', age: 29 }


// 4 --- we can use let in place of const
function Person(name, age) {
  this.name = name;  // 'this' refers to the new object created
  this.age = age;
}

// Creating objects using the constructor function
let person1 = new Person('John', 30);
let person2 = new Person('Jane', 25);
let person3 = new Person('Jack', 29);


console.log(person1);  // Outputs: Person { name: 'John', age: 30 }
console.log(person2);  // Outputs: Person { name: 'Jane', age: 25 }
console.log(person3);  // Outputs: Person { name: 'Jack', age: 29 }