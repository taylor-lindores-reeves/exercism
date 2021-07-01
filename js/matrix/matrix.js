// FIND THE POWER OF A NUMBER

// function Power(base, exponent) {
//     var result = 1;
//     for (count = 0; count < exponent; count++) {
//         result *= base;
//         console.log(result);
//     }
// }

// Power(10, 5)

var Matrix = function (matrix) {
    matrix = matrix.split('\n')

    var chunks = [];
    for (var i = 0; i < matrix.length; i++) {
        if(matrix.length*(i)<=matrix.length) {
            chunks.push(matrix.slice(matrix.length*i, matrix.length*(i+1)))
        };
    }

    chunks = chunks.map(string => {
        return string.map(i => {
            return i.split(' ').map(Number)
        })
    })

    this.rows = chunks[0]
    var column = [[], [], []];

    for (var i = 0; i < this.rows.length; i++) {
        let counter = 0;
        
        while(counter < 3) {
            column[counter].push(this.rows[i][counter])
            counter++
        }
    }

    this.columns = column;

}

module.exports = Matrix;