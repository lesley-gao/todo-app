console.log("Running automated test...");

const testPassed = false;

if (!testPassed) {
  console.error("Test failed intentionally for CI/CD evidence.");
  process.exit(1);
}

console.log("Test passed.");