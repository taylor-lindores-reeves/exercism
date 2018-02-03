var Triangle = function(input) {
    if (input == 1) {
        this.rows = [[1]]
    } else {
        function pasc(n){
            var result = [];
                result[0] = [1];
                result[1] = [1,1];
            for (var row = 2; row < n; row++){
                result[row] = [1];
                for (var col = 1; col <= row -1; col++){
                    result[row][col] = result[row-1][col] + result[row-1][col-1];
                    result[row].push(1);
                }
            }
            return result;
        }
            
        this.rows = pasc(input)

        this.lastRow = pasc(input)[pasc(input).length -1]
    }
}

module.exports = Triangle;