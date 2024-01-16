function masaiDivisors(left, right, k) {
    var count = 0;
    for (left; left <= right; left++) {
        left % k === 0 ? ++count : "";

    }
    // return count;
    console.log(count)
}

masaiDivisors()