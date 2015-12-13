var num = 5

var factorial = function(thing) {
  //for every num that comes through we want to multiply that to fact
  //
  var fact;
  for(var i = thing; i >= 0; i - 2) {
    fact += i * (i - 1);
  };
  return fact;
};

//factorials are numbers derived from multiplying all

console.log(factorial(num));










/* stringy
var = function(size) {
    for(var i = size)
};*/
var additive = function(num) {
  var newNum = 0
  for(var i = 0; i <= num; i++) {
    newNum += newNum + i;
  }
  return newNum;
};
