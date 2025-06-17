// Test customerName
console.log("Initial customerName:",customerName);  // Expected: 'bob'

// Test upperCaseCustomerName
upperCaseCustomerName();
console.log("Uppercased customerName:", customerName);  // Expected: 'BOB'

// Test setBestCustomer
setBestCustomer();
console.log("bestcustomer:", bestCustomer);  // Expected: 'not bob'

// Test overwriteBestCustomer
overwriteBestCustomer();
console.log("Overwritten bestCustomer:", bestCustomer);  // Expected: 'maybe bob

// Test changeLeastFavoriteCustomer
try {
    changeLeastFavoriteCustomer();
} catch (error) {
    console.error("Error changing leastFavoriteCustomer:", error.message);  // Expected: Error message about reassignment of constant
}