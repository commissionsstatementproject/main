import { wait } from "@testing-library/react";

export const explicitWait = async milliseconds => {
  return await wait(() => setTimeout(() => true, milliseconds));
};
