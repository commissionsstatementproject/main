export const formatAndAlert = errors => {
  const errorString = errors.join("\n");
  alert(errorString);
};
