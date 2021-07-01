var LinkedList = function() {
    this.stack = new Array();
};

LinkedList.prototype.push = function(input) {    
    return this.stack.push(input)
    
}

LinkedList.prototype.pop = function(input) {    
    return this.stack.pop(input)
}

LinkedList.prototype.shift = function(input) {    
    return this.stack.shift(input)
}

LinkedList.prototype.unshift = function(input) {    
    return this.stack.unshift(input)
}

LinkedList.prototype.count = function(input) {    
    return this.stack.length
}

LinkedList.prototype.delete = function(input) {    
    const index = this.stack.indexOf(input);
    return this.stack.splice(index, 1);
}

module.exports = LinkedList;