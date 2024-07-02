const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(numArray) {
  let totalSum = 0;

  for (const num of numArray) {
    totalSum += num;
  }

  return totalSum;
	
};

const multiply = function(numArray) {
  let totalProduct = 1;

  for (const num of numArray) {
    totalProduct *= num;
  }

  return totalProduct;

};

const power = function(num1, num2) {
  return num1 ** num2;
	
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  let factorial = 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  return factorial;

	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
