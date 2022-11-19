const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	const sumArray = a.reduce((accumulator, current) => {
      return accumulator + current;
  }, 0)
    return sumArray;

};

const multiply = function(a) {
    const sumArray = a.reduce((accumulator, current) => {
        return accumulator * current;
    }, 1)
    return sumArray;

};

const power = function(a,b) {
    return a**b;
};

const factorial = function(a) {
    let sum = 1;
    for (let i = a; i > 0; i--) {
        sum *= i;
    }
    return sum;
    }
;

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
