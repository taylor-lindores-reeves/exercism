var primeFactors = {
    for: function(input) {
        if (input == 1) return [];
        else
            n = Number(input);
            var arr = []

            for (var i = 2; i <= n; i++) {
                while((n % i) == 0) {
                    arr.push(i);
                    n /= i;
                }
            }
            console.log(arr);
            return arr;
    }
        
}

module.exports = primeFactors;
