// 1. Variable Declarations
const websiteName = "Developer Hub"; // Used for values that won't change
let visitorCount = 42;               // Used for variables that will be reassigned

// 2. Working with Objects and Arrays
const user = {
    username: "coder123",
    role: "Admin"
};

const modernFrameworks = ["React", "Vue", "Angular", "Svelte"];

// 3. Arrow Function with Template Literals
const greetUser = (userInfo) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    // Using backticks (``) for dynamic string interpolation
    return `Hello ${userInfo.username}! Welcome to ${websiteName}. Today is ${today}.`;
};

// 4. Executing code and logging to the console
console.log(greetUser(user)); 

// 5. Modifying a stateful variable
visitorCount++; 
console.log(`Updated Visitor Count: ${visitorCount}`);

// 6. Array Iteration
console.log("Supported Frameworks:");
modernFrameworks.forEach((framework, index) => {
    console.log(`${index + 1}. ${framework}`);
});
