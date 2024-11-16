// Function to check divisibility
function checkDivisibility() {
    // Prompt user for a number
    let number = parseFloat(prompt("Enter a number:"));
    // Prompt user for a divisor
    let divisor = parseFloat(prompt("Enter a divisor:"));

    // Check if divisor is not zero
    if (divisor === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }

    // Check divisibility
    if (number % divisor === 0) {
        console.log(`${number} is divisible by ${divisor}.`);
    } else {
        console.log(`${number} is not divisible by ${divisor}.`);
    }
}

// Call the function
checkDivisibility();
