// Test data from yesterday
let username = 'testUser123';
let password = 'correctPass';
let loginAttempts = 0;
let maxAttempts = 3;

loginAttempts = loginAttempts + 1;  // Addition
let remainingAttempts = maxAttempts - loginAttempts;  // Subtraction
let totalTests = 5 * 3;  // Multiplication
let averageTime = 150 / 5;  // Division

console.log('Login attempts:', loginAttempts);
console.log('Remaining attempts:', remainingAttempts);
console.log('Total tests:', totalTests);
console.log('Average time:', averageTime);

// Comparison operators
let expectedTitle = 'Dashboard';
let actualTitle = 'Dashboard';
let expectedCount = 5;
let actualCount = 5;

// Equality checks
console.log('Titles match:', actualTitle === expectedTitle);  // true
console.log('Counts match:', actualCount === expectedCount);  // true

// Other comparisons
console.log('Attempts less than max:', loginAttempts < maxAttempts);  // true
console.log('Attempts greater than 0:', loginAttempts > 0);  // true
console.log('Password not empty:', password !== '');  // true

// The difference between == and ===
console.log('5 == \"5\":', 5 == '5');    // true (converts types)
console.log('5 === \"5\":', 5 === '5');  // false (strict comparison)

//conditional logic - making decisions
// Conditional logic
if (username === 'testUser123' && password === 'correctPass') {
    console.log('✅ Login successful - proceeding to dashboard');
    let isLoggedIn = true;
} else if (loginAttempts >= maxAttempts) {
    console.log('❌ Too many failed attempts - account locked');
} else {
    console.log('⚠️ Invalid credentials - try again');
}

// Switch statement for test status
let testResult = 'passed';

switch (testResult) {
    case 'passed':
        console.log('✅ Test passed - continuing test suite');
        break;
    case 'failed':
        console.log('❌ Test failed - taking screenshot');
        break;
    case 'skipped':
        console.log('⏭️ Test skipped - moving to next test');
        break;
    default:
        console.log('❓ Unknown test result');
}

// Logical operators - combining conditions
let pageLoaded = true;
let elementVisible = true;
let dataReady = false;

// AND operator - all conditions must be true
if (pageLoaded && elementVisible && dataReady) {
    console.log('✅ Ready to run test');
} else {
    console.log('⏳ Waiting for conditions...');
}

// OR operator - at least one condition must be true
if (username === 'admin' || username === 'testUser123') {
    console.log('✅ Authorized user');
}

// NOT operator - reverse the condition
if (!dataReady) {
    console.log('⏳ Still loading data...');
}