function orderCoffee(callback) {
    setTimeout(() => {
      callback("Coffee is ready!");
    }, 5000);    // 5 seconds wait
  }
  
  orderCoffee((coffee) => {
    console.log(coffee);
  });   // Output : Coffee is ready!


  // 2 example

  function waitWithCallback(ms, callback) {          // ms -- mili seconds
    setTimeout(() => {
      callback(`Waited ${ms}ms (callback)`);
    }, ms);
   }
   
   
   console.log("FUNCTION-1 Start (callback)");


   waitWithCallback(3000, (msg) => {
    console.log(msg);
    console.log("FUNCTION-2 End (callback)");
   });
   
   
   console.log("FUNCTION-3 This runs immediately after async call")
   
  