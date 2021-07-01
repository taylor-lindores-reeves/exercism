var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function (input) {
    this.input = input

    var arr = this.input.split('');
    var newarr = [];

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] !== "C" & arr[a] !== "A" & arr[a] !== "G" & arr[a] !== "T") {
            throw new Error('Invalid input')
        }

        if (arr[a] === "C") {
            newarr.push('G')
        }

        if (arr[a] === "A") {
            newarr.push('U')
        }

        if (arr[a] === "G") {
            newarr.push('C')
        }

        if (arr[a] === "T") {
            newarr.push('A')
        }
    }

    var result = newarr.join('');
    return result


}

module.exports = DnaTranscriber;