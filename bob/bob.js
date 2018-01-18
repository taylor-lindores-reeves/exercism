var Bob = function (input) {
    this.input = input;
}

Bob.prototype.hey = function () {
    var whatever = this.input[this.input.length - 1];

    if (whatever === '.' || /[a-z]/.test(whatever)) {
        return 'Whatever.';
    }
}

module.exports = Bob;


// PARAMETERS ARE CALLED WHEN CONSTRUCTING A NEW CLASS

// 'Sure.' (QUESTION MARK)

// 'Whoa, chill out!' (CAPS LOCK)

// 'Calm down, I know what I'm doing!' (QUESTION MARK && CAPS LOCK)

// 'Fine. Be that way!' (EMPTY STRING OR REGEX)

// 'Whatever.' to anything else. (FULL STOP OR NO FULL STOP)