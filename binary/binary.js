var Binary = function(input) {
    this.input = input
}

Binary.prototype.toDecimal = function() {
    if (/[a-z]/.test(this.input) || /[2 - 9]/.test(this.input)) return 0;
    
    var arr = this.input.split('').reverse();
    var newarr = [];

    for (var a = 0; a < arr.length; a++) {
        newarr.push(Math.pow(arr[a] * 2, a));
    }

    var result = newarr.reduce(function(previous, current) {
        return previous + current;
    })

    if (arr[0] == 0) return result - 1;
    else return result;
}


var binary = new Binary('10nope');
binary.toDecimal();

module.exports = Binary;