const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (string) {
    string = string.replace(/[!,.?@[\]" "]/g, '').toLowerCase();

    reversedString = string.split("").reverse().join("")

    return string === reversedString;

};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
