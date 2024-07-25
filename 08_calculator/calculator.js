const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(array) {
	let finalSum = array.reduce((prev,next) => {
    return prev + next;
  },0)

  return finalSum;

};

const multiply = function(array) {

  let finalMultiply = array.reduce((prev,next) => {
    return prev * next;
  },1);

  return finalMultiply;

};

const power = function(x,y) {

    let ans = 1;
    for(let i = 0; i < y; i++){
      ans *= x;
    }

    return ans;
};

const factorial = function(number) {

  if(number === 0) {
    return 1;
  }

  let final = 1;
  for(let i = number; i >= 1; i--){
    
    final *= i;
  }

  return final;
	
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
