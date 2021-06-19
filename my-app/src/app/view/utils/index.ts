export const getCurrentYear = () => new Date().getFullYear();

export const getLastYears = (number: number): Array<number> => {
  const currentYear = getCurrentYear();

  return Array.from({ length: number }, (el, i) => currentYear - i);
};
