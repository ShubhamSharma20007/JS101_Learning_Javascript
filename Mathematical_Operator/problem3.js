function sumOfMultiples(n, k, y) {
    var sum = 0;
    for (var i = 1; i <= k; i++) {
        const table = i * n;
        if (table % y === 0) {
            sum += table;
        }
    }
    console.log(sum)



}