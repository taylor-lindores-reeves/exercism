//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
    this.input = input // instantiates input as a property of the Year object (functions are objects)
};

Year.prototype.isLeap = function () {

    if (this.input % 2 !== 0) {
        return false
    } else if (this.input % 100 === 0) {
        if (this.input % 400 === 0) {
            return true
        } else {
            return false;
        }
    }

    if (this.input % 4 === 0) {
        return true
    } else {
        return false
    }

};

module.exports = Year;
