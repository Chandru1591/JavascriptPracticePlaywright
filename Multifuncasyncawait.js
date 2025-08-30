function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Chandru"), 6000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 6000);
    });
}
function fetchvoid() {
    console.log("void function called");    
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);

    fetchvoid();
}

runApp();  // // output : Logged in as Chandru Dashboard loaded void function called

/////////////// 2nd example by calling fetchvoid(); outside async function

function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Chandru"), 6000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 6000);
    });
}
function fetchvoid() {
    console.log("void function called");    
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);
    

}

runApp();
fetchvoid();     // output : void function called Logged in as Chandru Dashboard loaded