export function toContainMatch(receivedArray, regex) {
  const pass = receivedArray.some(element => regex.test(element));
  if (pass) {
    return {
      pass: true,
      message: () =>
        `expected [${receivedArray}] to contain no strings ` +
        `that match ${regex} but at least one did`
    };
  } else {
    return {
      pass: false,
      message: () =>
        `expected [${receivedArray}] to contain at least one string ` +
        `that matches ${regex} but no match was found`
    };
  }
}

export function toAllMatch(receivedArray, regex) {
  const pass = receivedArray.every(element => regex.test(element));
  if (pass) {
    return {
      pass: true,
      message: () =>
        `expected not all elements in [${receivedArray}] to match ` +
        `${regex} but at least one match was found`
    };
  } else {
    return {
      pass: false,
      message: () =>
        `expected every element in [${receivedArray}] to match ` +
        `${regex} but at least one did not`
    };
  }
}
