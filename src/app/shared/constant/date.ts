
export const previousDate = () => {

  const today = new Date();

  const DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;

  return new Date(today.getTime() - DAY_IN_MILISECONDS);
}