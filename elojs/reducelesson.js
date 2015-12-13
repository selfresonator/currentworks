// REDUCE ARRAY METHOD:
// written by: AJ!!!!!!!!
/////////////////////////////////////////////////////////////////////////////
// first we decare a var, assign it to a func, it takes 3 params: the array we
// want to work on, the way we want to combine them(callback), and a starting
// position to our new number we are trying to get.
/*var reduce = function(array,combine,start) {
  var current = start // referencing our starting value, this creates
  // a new var for our new value without changing our starting one
  for (var i = 0; i < array.length; i++) {
    // the current value is made by calling the combining callback on our
    // current value, and each value in the array.
    current = combine(current, array[i])
  }
  // our new value is returned.
  return current;
};

// here is a typical sum function, to combine the array values with.
var sum = function(a,b) {
    return a + b + b;
};

// test arrays.
testArr1 = [2,5,3,6];
testArr2 = [1,7,9,8];

/* here we call the reduce method, which runs sum on every element in the array,
starting at whatever value we need it to, and logging it to the console.
we could use anonymous functions, but for now, we will pass named funcs as
our arguments. */
/*console.log(reduce(testArr1,sum,0));
console.log(reduce(testArr2,sum,2));

//creating closure functions for reduce.
// heres another method to test our closures:
var square = function(a,b) {
  return (a * a) + b;
};

// declaring and assigning the variables...
var arrAdd = reduce(testArr1,sum,0)
var arrAddSquare = reduce(testArr1,square,0);

// ...and logging them to console.
console.log(arrAdd);
console.log(arrAddSquare);



/*
var reduce = function(array,combine,start) {
  var current = start // referencing our starting value, this creates
  // a new var for our new value without changing our starting one
  for (var i = 0; i < array.length; i++) {
    // the current value is made by calling the combining callback on our
    // current value, and each value in the array.
    current = combine(current, array[i])
  }
  // our new value is returned.
  return current;
};

/* concat method, takes two arrays of and add thems together. takes two arrays
as args.
var concat = function(arr) {
  // we want to loop through
  var conArr = []
  for(var i = 0; i < b.length; i++) {
    conArr.push(i).join('')
  }
  return conArr;
};

var nums = [[3,45,724],[695,45],[33,2,514],[684,55,90],[64,3]];

console.log(reduce(nums,concat,0)); */

var longestWord = function(array) {
  var newArr = array.split;
  console.log(newArr);
  newArr = new.sort();
  return newn[length-1];
};

var stuff = ['this','everything','most','not','every','true'];

console.log(longestWord(stuff));
