const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr)=> acc + curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr)=> acc * curr, 1)
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
  let arr = []
	if(num == 0) {
    return 1;
  } else if (num >= 1) {
    for(num; num >= 1; num--){
      arr.push(num)
    }
  }
  return multiply(arr);

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
