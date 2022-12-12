import dayjs from "dayjs";
import { DATE_FORMAT_DISPLAY, DATE_TIME_FORMAT_MINUTE } from "../constant";

export const formatDate = (value, typePicker) => {
  const newDay = dayjs(value);
  return newDay?.locale("ja").format(DATE_FORMAT_DISPLAY);
};

export const getMonth = (value) => {
  return value ? new Date(value).getMonth() : new Date().getMonth();
};

export const formatDateTime = (value) => {
  let result;
  if (value === undefined || value === null) {
    const dateMoment =
      value?.length === 10 ? dayjs(value, DATE_TIME_FORMAT_MINUTE) : value;
    result = dateMoment?.locale("ja").format(DATE_TIME_FORMAT_MINUTE);
  } else {
    const newDay = dayjs(value);
    result = newDay?.locale("ja").format(DATE_TIME_FORMAT_MINUTE);
  }
  return result;
};

export const formatDateTimeTable = (value) => {
  const newDay = dayjs(value);
  return newDay?.locale("ja").format(DATE_TIME_FORMAT_MINUTE);
};
