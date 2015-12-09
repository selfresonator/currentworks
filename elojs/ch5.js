//  CH 5 EXERCISES
//  EVERY AND SOME:
// for every a for loopshould run through every array,
// if the new array in it has passed every function, it will return true if
// compared to the original array. 'some' should check to see if the new array
// contains any elements at all, if so, it will return true.
var every = function(array,predicate) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		if(predicate(array[i]) {
			newArr.push(newArr[i])
		} };
	newArr === array ? return true : return false;
	};
};

//var forEach = function(array,action) {
//	for(var i = 0; i < array.length; i++) {
//		action(array[i]);
//	}
//};
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));

//////////
var every = function(array,predicate) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		if(predicate(array[i])) {
			return true;
		}
	}
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
	  predicate(array[i]) ? console.log(true) : console.log(false)
	}
}

console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));


// FLATTENING:
var reduce = function(array,concat) {

	return concat(array);
};

nums = [[3,45,724],[695,45],[33,2,514],[684,55,90],[64,3]];
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
nums = [3,45,724,695,45];

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
