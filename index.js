// index.js

// Simple test runner function
function test(name, fn) {
  try {
    fn();
    console.log(`✅ PASS - ${name}`);
  } catch (error) {
    console.log(`❌ FAIL - ${name}`);
    console.error(error.message);
  }
}

// Tests
test("Addition works", () => {
  if (2 + 2 !== 4) throw new Error("2 + 2 should equal 4");
});

test("String matches", () => {
  const word = "Playwright";
  if (word !== "Playwright") throw new Error("Word should match");
});

test("Array length check", () => {
  const arr = [1, 2, 3, 4];
  if (arr.length !== 4) throw new Error("Array should have 4 items");
});