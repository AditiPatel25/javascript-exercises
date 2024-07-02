const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS";
    } else if (num == 0) {
        return 0;
    }

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= num; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
