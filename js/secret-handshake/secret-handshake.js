var SecretHandshake = function(input) {
    this.input = input;

    if (/[a-z]/i.test(input)) {
        throw new Error('Handshake must be a number')
    }
}

SecretHandshake.prototype.commands = function() {

    this.input = Number(this.input)
    var conditional = this.input;
    var arr = [];

    for (var a = 0; a < this.input; a++) {
        while (this.input >= 1) {
            let remainder = this.input % 2;
            arr.push(remainder);
            this.input = Math.floor(this.input / 2);
        }
    }    

    arr = arr.reverse();
    let string = arr.join('');
    var newarr = [];
    console.log(arr)

    if (conditional < 16) {
        for (var i = 0; i < 4; i++) {
            if (string >= 1000) {
                newarr.push('jump');
                string = string - 1000;
            }
            if (string >= 100) {
                newarr.push('close your eyes');
                string = string - 100;        
            }
            if (string >= 10) {
                newarr.push('double blink');
                string = string - 10;
            }
            if (string >= 1) {
                newarr.push('wink');
                string = string - 1;
            }
        }

        return newarr.reverse();

    } else if (conditional > 16) {
        string = string.slice(1, 5)
        for (var j = 0; j < 4; j++) {
            if (string >= 1000) {
                newarr.push('jump');
                string = string - 1000;
            }
            if (string >= 100) {
                newarr.push('close your eyes');
                string = string - 100;        
            }
            if (string >= 10) {
                newarr.push('double blink');
                string = string - 10;
            }
            if (string >= 1) {
                newarr.push('wink');
                string = string - 1;
            }
        }

        return newarr;
    }
}

module.exports = SecretHandshake;