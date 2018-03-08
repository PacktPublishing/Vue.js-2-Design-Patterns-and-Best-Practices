import moment from 'moment';

export const convertDateToString = value =>
  moment(String(value)).format('MM/DD/YYYY');
