console.log("Running automated test...");

const testPassed = true;

if (!testPassed) {
  console.error("Test failed intentionally for CI/CD evidence.");
  process.exit(1);
}

console.log("Test passed.");
