var Pangram = function (input) {
    this.input = input
}

Pangram.prototype.isPangram = function () {
    var a_ascii = 'a'.charCodeAt(0);
    var arr = [];
    for (var i = 0; i < 26; i++) {
        var alphabet = String.fromCharCode(a_ascii + i)
        
        if (this.input.includes(alphabet) || this.input.includes(alphabet.toUpperCase())) {
            arr.push(alphabet)
        }
    }

    arr = arr.join('')

    if (arr === 'abcdefghijklmnopqrstuvwxyz') {
        return true
    } else {
        return false
    }
}

module.exports = Pangram;