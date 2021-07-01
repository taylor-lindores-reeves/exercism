var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  var name = who

  if (name) {
    return `One for ${name}, one for me.`
  } else {
    return `One for you, one for me.`
  }   
};

module.exports = TwoFer;
