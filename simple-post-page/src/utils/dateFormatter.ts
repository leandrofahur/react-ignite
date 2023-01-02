export const getDateFormatted = (date) => {
  const dateFormatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
  return dateFormatted;
};

export const getNumberOfDaysFromCurrentDate = (date) => {
  const timeDifference = new Date().getTime() - date.getTime();

  const dateDaysDifference = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
  }).format(timeDifference);

  return dateDaysDifference;
};
