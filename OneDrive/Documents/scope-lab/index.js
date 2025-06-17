// 1. Declare customerName in global scope
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // This will be global because we didn't declare it with var, let, or const
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // This will also be global
}

// 5. Declare constant in global scope
const leastFavoriteCustomer = 'alice'; // This is a constant and cannot be changed

// 6. Function to attempt to change constant
function changeLeastFavoriteCustomer() {
    // This will throw an error when executed
    leastFavoriteCustomer = 'charlie'; 
}