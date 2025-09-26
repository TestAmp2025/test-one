// 1. Arrow Functions

// Traditional function
function traditionalLogin(username, password) {
    return `Logging in ${username} with password ${password}`;
}

const arrowLogin = (username, password) => {
    return `Logging in ${username} with password ${password}`;
};

const shortLogin = (username, password) => `Logging in ${username} with password ${password}`;


//2. Template Literals
const testUser = 'john_doe';
const testEnv = 'staging';
const testCount = 5;

// Old way
const oldMessage = 'Running ' + testCount + ' tests for user ' + testUser + ' in ' + testEnv;

// ES6 way (template literal)
const newMessage = `Running ${testCount} tests for user ${testUser} in ${testEnv}`;

// console.log(oldMessage)
// console.log(newMessage)

//3. Destructuring

const testConfig = {
    baseUrl: 'https://testapp.com',
    timeout: 30000,
    retries: 3,
    browser: 'chromium'
};

const baseUrl = testConfig.baseUrl;
const timeout = testConfig.timeout;
// console.log(baseUrl, timeout);

// const { baseUrl, timeout } = testConfig;
// console.log(baseUrl, timeout);


//4. Spread Operator (...)

const basicTests = ['login', 'logout'];
const advancedTests = ['api_test', 'performance_test'];

const allTests = [...basicTests, ...advancedTests, 'security_test'];
// console.log(allTests);


const defaultConfig = { timeout: 30000, retries: 3 };
const customConfig = { ...defaultConfig, browser: 'firefox' };
// console.log(customConfig);

//5 5. Default Parameters

const runTest = (testName, browser = 'chromium', timeout = 30000) => {
    return `Running ${testName} on ${browser} with ${timeout}ms timeout`;
};

// console.log(runTest('login_test')); 
// console.log(runTest('login_test', 'firefox'));
// console.log(runTest('login_test', 'firefox', 6000));

//6. Enhanced Object Literals
const username = "test_user";
const password = "test_pass";

// Old way
const user1 = {
  username: username,
  password: password
};

// New way (shorthand)
const user2 = {
  username,
  password
};

//console.log(user1); 
// { username: "test_user", password: "test_pass" }

const user = {
  username: "admin",
  
  // Old way
  login: function() {
    return `${this.username} logged in`;
  },

  // New way
  logout() {
    return `${this.username} logged out`;
  }
};

console.log(user.login());  // admin logged in
console.log(user.logout()); // admin logged out
