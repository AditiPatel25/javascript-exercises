const removeFromArray = function(array, ...args) {

    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        // checks to see if the current value
        // is in the array of numbers to be removed
        if (args.indexOf(array[i]) === -1) {
            returnArray.push(array[i]);
        } 
    }

    return returnArray;
};

// removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
