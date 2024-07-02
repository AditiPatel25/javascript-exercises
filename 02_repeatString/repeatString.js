const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    count = 0;
    let new_string = "";
    while(count != num) {
        new_string += string;
        count++;
    }

    return new_string;

};

// Do not edit below this line
module.exports = repeatString;
