export const convertAndValidateDate = (year: number, month: number, day: number): Date | null => {
  const date = new Date(year, month - 1, day);

  if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
    return date;
  }

  return null;
};
