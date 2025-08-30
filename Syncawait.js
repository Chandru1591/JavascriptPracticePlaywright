async function completeorder() {
    let coffee = await orderCoffee();
        console.log(coffee);
    
        
    let sandwich = await ordersandwich();
        console.log(sandwich);
    

    let donut = await orderdonut();
        console.log(donut);

    let bill = await getbill();
        console.log(bill);    
           
}
    completeorder();