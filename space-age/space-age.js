var SpaceAge = function(input) {
    this.input = input
    this.seconds = input

    if (this.seconds === 1000000) {
        return this.seconds;
    }
}

SpaceAge.prototype.onEarth = function() {
    return Number((this.input / 31557600).toFixed(2));
}

SpaceAge.prototype.onMercury = function() {
    return Number(((this.input / 31557600) * 4.152018690727338).toFixed(2))
}

SpaceAge.prototype.onVenus = function() {
    return Number(((this.input / 31557600) * 1.6254948859817744).toFixed(2))
}

SpaceAge.prototype.onMars = function() {
    return Number(((this.input / 31557600) * 0.5316841766216553).toFixed(2))
}

SpaceAge.prototype.onJupiter = function() {
    return Number(((this.input / 31557600) * 0.0842984451573283).toFixed(2))
}

SpaceAge.prototype.onSaturn = function() {
    return Number(((this.input / 31557600) * 0.03395874243713337).toFixed(2))
}

SpaceAge.prototype.onUranus = function() {
    return Number(((this.input / 31557600) * 0.011902374911812329).toFixed(2))
}

SpaceAge.prototype.onNeptune = function() {
    return Number(((this.input / 31557600) * 0.006068280780808115).toFixed(2))
}

module.exports = SpaceAge;