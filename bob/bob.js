var Bob = function () {}

Bob.prototype.hey = function (input) {
    var inputOne = input.slice(-1);
    var inputTwo = input[input.length -2];
    var inputThree = input[input.length -5];
    var inputter = input.replace(/ /g,'')

    console.log(inputter)

    if (/[\s\S]*/.test(inputter) && inputter === '' || /\t/.test(inputter) ) {
        return 'Fine. Be that way!'
    }

    if (inputOne === '?' && /[A-Z]/.test(inputThree)) {
        return 'Calm down, I know what I\'m doing!'
    }

    if (inputOne === '?') {
        return 'Sure.';

    } else if (/[\s]/.test(inputOne)) {
        var inputThree = input = input.replace(/ /g,'');

        if (inputThree.slice(-1) === '?') {
            return 'Sure.'
        }
    }

    if (inputOne === '!' && /[A-Z]/.test(inputTwo) || /[A-Z]/.test(inputOne) || /[0-9]/.test(inputTwo)) {
        return 'Whoa, chill out!'
    }
    
    if (inputOne === '.' || 
        /[a-z]/.test(inputOne) ||
        /[0-9]/.test(inputOne) ||
        /[a-z]/.test(inputTwo) ||
        inputOne === '!' && 
        /[a-z]/.test(inputTwo) ||
        /[\s]/.test(inputOne)) {
        return 'Whatever.';
    }
}

module.exports = Bob;

// REMEMBER THAT INPUT TOTALLY DEPENDS ON WHAT IS BEING CALLED i.e. is it the constructor function or is it the object?
// PARAMETERS ARE CALLED WHEN CONSTRUCTING A NEW CLASS
// PARAMETERS ARE NOT PASSED TO A PROTOTYPAL FUNCTION CALL
// ALWAYS PASS AN EMPTY STRING TO NEW CLASS DEFINITION