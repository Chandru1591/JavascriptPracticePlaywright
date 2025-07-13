// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);  
// console.log(evenNumbers); // [2, 4]

// let numbers = [1, 3, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);  
// console.log(evenNumbers); // [] output is empty because here there is no even numbers so condition didn't satisfied

// let numbers = [1, 2, 3, 4, 5];
// let oddNumbers = numbers.filter(num => num % 2 === 1);  
// console.log(oddNumbers); // [1, 3, 5] this will be output of odd numbers

// TO FILTER THE TESTCASEID WHICH HAS THE STATUS FAIL

// let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
// let failedTests = results.filter(r => r.status === 'fail');
// console.log(failedTests); // output -- [ { testcaseid: 2, status: 'fail' } ]

// TO FILTER THE TESTCASEID WHICH HAS THE STATUS PASS

// let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
// let failedTests = results.filter(r => r.status === 'pass');
// console.log(failedTests); // output -- [ { testcaseid: 1, status: 'pass' } ]

// TO FILTER THE TESTCASEID WHICH HAS THE TESTCASEID 1

// let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
// let failedTests = results.filter(r => r.testcaseid === 1);
// console.log(failedTests); // output -- [ { testcaseid: 1, status: 'pass' } ]

// TO FILTER THE TESTCASEID WHICH HAS THE TESTCASEID 2

// let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
// let failedTests = results.filter(r => r.testcaseid === 2);
// console.log(failedTests); // output -- [ { testcaseid: 2, status: 'fail' } ]

// TO PRINT THE TESTCASE WHICH HAS THE TESTCASE SMOKE

// let results = [{testcase: 'smoke', status: 'pass'}, {testcase: 'sanity', status: 'fail'}];
// let failedTests = results.filter(r => r.testcase === 'smoke');
// console.log(failedTests); // output -- [ { testcase: 'smoke', status: 'pass' } ]

// TO PRINT THE TESTCASE WHICH HAS THE TESTCASE SANITY

let results = [{testcase: 'smoke', status: 'pass'}, {testcase: 'sanity', status: 'fail'}];
let failedTests = results.filter(r => r.testcase === 'sanity');
console.log(failedTests); // output -- [ { testcase: 'sanity', status: 'fail' } ]




