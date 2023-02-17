export const formatTime = (t: Date) => {
  const date = new Date(t);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return {
    year,
    month,
    day
  };
};
