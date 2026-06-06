const { add, subtract, divide } = require('./math');

// Helper function to pause execution for a given time
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Math Utilities Tests (Simulated 60s Run)', () => {
  
  test('should correctly add two numbers', async () => {
    console.log("Starting test 1/4...");
    await sleep(15000); // 15 seconds wait
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  }, 20000); // Set custom test timeout to 20s

  test('should correctly subtract two numbers', async () => {
    console.log("Starting test 2/4...");
    await sleep(15000); // 15 seconds wait
    expect(subtract(5, 2)).toBe(3);
    expect(subtract(2, 5)).toBe(-3);
  }, 20000); // Set custom test timeout to 20s

  test('should correctly divide two numbers', async () => {
    console.log("Starting test 3/4...");
    await sleep(15000); // 15 seconds wait
    expect(divide(6, 2)).toBe(3);
  }, 20000); // Set custom test timeout to 20s

  test('should throw an error when dividing by zero', async () => {
    console.log("Starting test 4/4...");
    await sleep(15000); // 15 seconds wait
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero!");
  }, 20000); // Set custom test timeout to 20s

});
/// this is testing phase-5