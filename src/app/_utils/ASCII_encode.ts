export const replaceSpaces = (input: string[]) => {
  return input.map((item) => item.replace(/%20/g, " "));
};
