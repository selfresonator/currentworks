/*  CH 5 EXERCISES
  EVERY AND SOME:
Arrays also come with the standard methods every and some. Both take a
predicate function that, when called with an array element as argument,
returns true or false. Just like && returns a true value only when the
expressions on both sides are true, every returns true only when the predicate
returns true for all elements of the array. Similarly, some returns true
as soon as the predicate returns true for any of the elements. They do not
process more elements than necessary—for example, if some finds that the
predicate holds for the first element of the array, it will not look at
the values after that.

Write two functions, every and some, that behave like these methods, except
that they take the array as their first argument rather than being a method.
*/


//so if the for loop returns false
var every = function(array,predicate) {
	for(var i = 0; i < array.length; i++) {
		if(!predicate(array[i])) {
			return false;
		}
	}
	return true;
};

//var forEach = function(array,action) {
//	for(var i = 0; i < array.length; i++) {
//		action(array[i]);
//	}
//};
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));


//////////////

var some = function(array,predicate) {
	for(var i = 0; i < array.length; i ++) {
		if(predicate(array[i])) {
			return true;
		}
	}
	return false;
}

console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));


// FLATTENING:
var reduce = function(array,concat) {

	return concat(array);
};

var nums = [[3,45,724],[695,45],[33,2,514],[684,55,90],[64,3]];
var concat = function(array) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		for(var x = 0; x < array[i].length; x++) {
				newArr.push(array[i][x]);
		}
	}
	console.log(newArr);
	return newArr;
}
reduce(nums,concat);

var combine = function (array) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		for(var x = 0; x < array[i].length; x++) {
				newArr.push(array[i][x]);
		}
	}
	console.log(newArr);
	return newArr;
}

combine(nums);


// map:
var nums = [3,45,724,695,45];

var map = function(array,cb) {
  for(var i = 0; i < array.length; i++) {
		array[i] = cb(array[i]);
	}
	return array;
};

var square = function(n) {
	return n * n
};

var cubed = function(n) {
	return n * n * n
}

console.log(map(nums,square));
console.log(map(nums,cubed));

// map calls refactored:
nums2 = [3,45,724,695,45];
console.log(map(nums2,function(n) {
	return n * n;
}))
console.log(map(nums2,function(n) {
	return n * n * n
}));
