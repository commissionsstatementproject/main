// This is hopefully only necessary in React 16.8
// Delete this test helper once React fixes the broken "act" warning

function setupActWarningFilter(stderr) {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) {
      return;
    }
    stderr.call(console, ...args);
  };
}

function teardownActWarningFilter(stderr) {
  console.error = stderr;
}

export { setupActWarningFilter, teardownActWarningFilter };
