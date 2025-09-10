// Test user credentials - strings
let username = 'testUser123';
let password = 'SecurePass456';
let email = 'test@automation.com';

// Test counters - numbers
let loginAttempts = 0;
let testsPassed = 5;
let testsFailed = 2;

// Test status - booleans
let isLoggedIn = false;
let testComplete = true;
let debugMode = false;

// Using variables in automation logic
// console.log('=== Test Automation Data ===');
// console.log('Username:', username);
// console.log('Email:', email);
// console.log('Login attempts:', loginAttempts);
// console.log('Tests passed:', testsPassed);
// console.log('User logged in:', isLoggedIn);
// console.log('Test complete:', testComplete);

// // Undefined → declared but not assigned
// let x;
// console.log(x); // undefined

// // Null → intentional empty value
// let y = null;
// console.log(y); // null

// // NaN → invalid number operation
// let notANumber = 0 / 0;
// console.log(notANumber); // NaN

// // Object → key-value pairs
// let person = { name: "Tony", age: 30 };
// console.log(person.name); // Tony

// // Array → ordered list
// let numbers = [1, 2, 3];
// console.log(numbers[0]); // 1

// // Symbol → unique identifier
// let id = Symbol("id");
// console.log(id); // Symbol(id)

// // BigInt → large integer
// let bigNum = 9007199254740991n;
// console.log(bigNum); // 9007199254740991n

// const for values that never change in your tests
const websiteUrl = 'https://testamplify.com';
const maxRetries = 3;
const testTimeout = 30000;

// let for values that change during test execution
let currentPage = 'login';
let testResults = [];
let errorCount = 0;

// This would cause an error:
// websiteUrl = 'https://different.com'; // Error!

// But this works fine:
currentPage = 'dashboard';
errorCount = errorCount + 1; 

console.log('Website URL:', websiteUrl); 
console.log('Current page:', currentPage);
console.log('Error count:', errorCount);  