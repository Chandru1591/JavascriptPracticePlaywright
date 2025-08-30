// 1st example - if we use async/await here

// function fetchName() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Sidharth"), 1000);
//     });
// }

// async function showName() {
//     const name = await fetchName(); // waits for promise to finish
//     console.log("Name is:", name);
// }

// showName(); // Output - Name is: Sidharth


// 2nd example - if we don’t use async/await here

// function fetchName() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Sidharth"), 1000);
//     });
// }

// function showName() {
//     const name = fetchName(); //  This returns a Promise, not the value
//     console.log("Name is:", name);
// }

// showName(); // Output - Name is: Promise { <pending> }



// Fixes for the above when we don’t use async/await here. Use.then() -- option 1


// function fetchName() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Sidharth"), 1000);
//     });
// }

// function showName() {
//     fetchName().then(name => {
//         console.log("Name is:", name);
//     });

// }

// showName();     // Output - Name is: Sidharth


// option 2  Use async/await

function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 1000);
    });
}

async function showName() {
    const name = await fetchName();
    console.log("Name is:", name);
}

showName();   // Output - Name is: Sidharth

