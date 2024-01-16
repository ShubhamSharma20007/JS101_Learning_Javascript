function divisibleByKII(num, k) {
    let sum = 0;
    for (var i = 1; i <= num; i++) {
        i % k === 0 ? sum += i : "";
    }
    console.log(sum)
}

divisibleByKII()