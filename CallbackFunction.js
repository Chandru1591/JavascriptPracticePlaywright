// function orderCoffee(callback) {
//     setTimeout(() => {
//       callback("Coffee is ready!");
//     }, 5000);    // 5 seconds wait
//   }
  
//   orderCoffee((coffee) => {
//     console.log(coffee);
//   });   // Output : Coffee is ready!


//   // 2 example

//   function waitWithCallback(ms, callback) {          // ms -- mili seconds
//     setTimeout(() => {
//       callback(`Waited ${ms}ms (callback)`);
//     }, ms);
//    }
   
   
//    console.log("FUNCTION-1 Start (callback)");


//    waitWithCallback(3000, (msg) => {
//     console.log(msg);
//     console.log("FUNCTION-2 End (callback)");
//    });
   
   
//    console.log("FUNCTION-3 This runs immediately after async call")


/////////////////////////////////////////////

  //  orderCoffee((coffee) => {        // 1st nesting
  //   console.log(coffee);
  //   orderSandwich((sandwich) => {   // 2nd nesting
  //     console.log(sandwich);
  //     orderDonut((donut) => {       // 3rd nesting
  //       console.log(donut);
  //       getBill((bill) => {
  //         console.log(bill);
  //       });
  //     });
  //   });
  // });
   
///////////////////////////////////////////////////

  // orderCoffee()
  // .then(coffee => {
  //   console.log(coffee);
  //   return orderSandwich();
  // })
  // .then(sandwich => {
  //   console.log(sandwich);
  //   return orderDonut();
  // })
  // .then(donut => {
  //   console.log(donut);
  //   return getBill();
  // })
  // .then(bill => {
  //   console.log(bill);
  // });

////////////////////////////////////////

function wait(ms) { // --- added this example for day 5
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

function runWithPromise() {
  wait(3000)
    .then((msg) => {                 // Pure promise
      console.log(msg);
      console.log("FUNCTION-02: End (promise)");
    });
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithPromise();
