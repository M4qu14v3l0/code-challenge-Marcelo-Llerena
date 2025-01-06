import dayjs from "dayjs";

export const formatDateCustom = (dateString: string): string => {
  const date = dayjs(dateString);
  return date.format("D MMMM, YYYY").toUpperCase();
};

export const formateDateDatePicker = (dateString: Date) => {
  const date = dayjs(dateString);
  return date.format("MMM YYYY");
};
