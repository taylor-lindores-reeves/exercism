export const at = (hrs = 0, min = 0) => {
  const positiveModulus = (timeValue, roundedTime) => {
    return timeValue % roundedTime;
  };

  let minutes = positiveModulus(min, 60);

  let hours = positiveModulus(hrs, 24);

  const addToHours = min / 60;

  if (hours < 0 && hours > -25) {
    hours = Math.abs(24 % hours);
  }

  hours = hours + (Math.floor(addToHours) % 24);

  if (minutes < 10 && hours < 10) {
    return `0${hours}:0${minutes}`;
  } else if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else if (hours < 10) {
    return `0${hours}:${minutes}`;
  } else {
    return `0${hours}:0${minutes}`;
  }
};
