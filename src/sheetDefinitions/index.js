const numberOrHyphenRegex = /^(([0-9]{0,3}[,]?[0-9]{1,3}[.]?[0-9]{0,2})|-)$/;
const nameRegex = /^[a-zA-Z ]{2,255}$/;
const percentageRegex = /^[0-9]{1,4}[.]?[0-9]{0,2}[^.]%$/;
const dateRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const quarterRegex = /^[1|2|3|4]$/;

export const columnDefinitions = {
  salespersonName: {
    required: true,
    address: "B",
    format: nameRegex
  },
  quarterlyVariableTarget: {
    required: true,
    address: "D",
    format: numberOrHyphenRegex
  },
  countryVariableTargetPay: {
    required: true,
    address: "E",
    format: numberOrHyphenRegex
  },
  percentOfCountryRevenueAchieved: {
    required: true,
    address: "O",
    format: percentageRegex
  },
  countryVariablePayEarned: {
    required: true,
    address: "U",
    format: numberOrHyphenRegex
  },
  individualVariableTargetPay: {
    required: true,
    address: "F",
    format: numberOrHyphenRegex
  },
  percentOfIndividualTargetAchieved: {
    required: true,
    address: "P",
    format: percentageRegex
  },
  individualVariablePayEarned: {
    required: true,
    address: "V",
    format: numberOrHyphenRegex
  },
  sowSignedVariableTargetPay: {
    required: true,
    address: "G",
    format: numberOrHyphenRegex
  },
  percentOfAtlTargetAchieved: {
    required: true,
    address: "Q",
    format: percentageRegex
  },
  atlVariablePayEarned: {
    required: true,
    address: "W",
    format: numberOrHyphenRegex
  },
  totalVariablePayEarned: {
    required: true,
    address: "X",
    format: numberOrHyphenRegex
  },
  boostersClaimed: {
    required: true,
    address: "AE",
    format: numberOrHyphenRegex
  },
  totalVariableCompensation: {
    required: true,
    address: "AF",
    format: numberOrHyphenRegex
  }
};

export const cellDefinitions = {
  paymentNotificationDate: {
    required: true,
    address: "I6",
    format: dateRegex
  },
  quarter: {
    required: true,
    address: "E2",
    format: quarterRegex
  }
};
