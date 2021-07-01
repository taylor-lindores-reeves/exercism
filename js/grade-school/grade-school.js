var School = function() {
    this.obj = {}
    this.arr = [];
    this.grade1 = [1, []];
    this.grade2 = [2, []];
    this.grade3 = [3, []];
    this.grade4 = [4, []];
    this.grade5 = [5, []];
    this.grade6 = [6, []];
    this.grade7 = [7, []];
    this.counter = 0;
    
};

School.prototype.add = function(student, grade) {

    if (grade === 1) {
        this.arr.push([grade, student]);
        this.grade1[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 2) {
        this.arr.push([grade, student]);
        this.grade2[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 3) {
        this.arr.push([grade, student]);
        this.grade3[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 4) {
        this.arr.push([grade, student]);
        this.grade4[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 5) {
        this.arr.push([grade, student]);
        this.grade5[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 6) {
        this.arr.push([grade, student]);
        this.grade6[1].push(this.arr[this.counter][1])
        this.counter++
    } else if (grade === 7) {
        this.arr.push([grade, student]);
        this.grade7[1].push(this.arr[this.counter][1])
        this.counter++
    }

    this.roster()
}

School.prototype.roster = function() {

    this.obj[this.grade1[0]] = this.grade1[1];
    this.obj[this.grade2[0]] = this.grade2[1];
    this.obj[this.grade3[0]] = this.grade3[1];
    this.obj[this.grade4[0]] = this.grade4[1];
    this.obj[this.grade5[0]] = this.grade5[1];
    this.obj[this.grade6[0]] = this.grade6[1];
    this.obj[this.grade7[0]] = this.grade7[1];

    for (key in this.obj) {
        if (this.obj[key].length === 0) {
            delete this.obj[key]
        }

        if (this.obj[key]) {
            this.obj[key].sort((a, b) => { return a > b; })
        }

        
    }

    return this.obj;
};

School.prototype.grade = function(val) {
    if (this.obj[val]) {
        return this.obj[val].sort((a, b) => { return a > b; });
    } else {
        return [];
    }
};

module.exports = School;