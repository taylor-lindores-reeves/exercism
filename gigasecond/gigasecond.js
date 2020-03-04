export const gigasecond = input => {
  var d = input;
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  var milliseconds = d.getMilliseconds();

  if (year < 1970) {
    return new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds + 999996400,
      milliseconds
    );
  }

  return new Date(
    year,
    month,
    day,
    hours,
    minutes,
    seconds + 1000000000,
    milliseconds
  );
};
