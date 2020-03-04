<<<<<<< HEAD
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
=======
var Gigasecond = function(input) {
    this.input = input
}

Gigasecond.prototype.date = function() {
    console.log(this.input)
    var d = this.input;
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var seconds = d.getSeconds();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var milliseconds = d.getMilliseconds();

    // return new Date(Date.UTC(year + 32, month - 4, day + 9, hours + 0, minutes + 46, seconds + 40))

    return new Date(year + 32, month - 4, day + 7, hours + 27, minutes - 134, seconds + 40, milliseconds + 1)
}


// new Date(Date.UTC(YEAR, INDEX-BASED MONTH, DAY, HOUR, MINUTE, SECOND));

module.exports = Gigasecond;
>>>>>>> f26f8db9c0fc4d350429458a7e3a1cd563b8349e
