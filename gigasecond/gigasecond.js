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
