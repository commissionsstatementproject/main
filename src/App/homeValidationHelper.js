const throwHomeValidationError = message => {
  throw new Error(`HomeValidationError: ${message}`);
};

export const validateFile = async file => {
  if (!file) {
    const message = "Please select a file before generating a statement!";
    throwHomeValidationError(message);
  } else if (file.size > 500000) {
    const message = "This file is HUGE! What are you trying to upload?";
    throwHomeValidationError(message);
  }
};

export const validateAgainstEmptySalespersonName = async name => {
  if (!name) {
    const message =
      "Please enter the salesperson's name before generating a statement!";
    throwHomeValidationError(message);
  }
};
