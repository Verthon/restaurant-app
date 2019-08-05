export const formatPrice = (cents) => {
  const options = {
    style: 'currency',
    currency: 'USD',
  };
  return (cents / 100).toLocaleString('en-US', options);
};

export const formatDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const splitDate = (date) => {
  let formatedDate = '';
  const temp = date.split(',');
  const [fullDate] = temp;
  formatedDate = fullDate;
  return formatedDate;
};

export const splitTime = (date) => {
  let formatedTime = '';
  const temp = date.split(',');
  const [time] = temp;
  formatedTime = time;
  return formatedTime;
};
