function sumAll() {
    let sum = 0;
    for(i = 0; i<arguments.length; i++) {
        console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAll(12,13,14,15));