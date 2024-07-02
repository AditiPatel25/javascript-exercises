const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }

    let startNum = num2;
    let length = num1;

    if (num2 > num1) {
        length = num2;
        startNum = num1;
    }

    let totalSum = 0

    for (let i = startNum; i <= length; i++) {
        totalSum += i;
    }

    return totalSum;

};

console.log(isNaN("90"));

// Do not edit below this line
module.exports = sumAll;
