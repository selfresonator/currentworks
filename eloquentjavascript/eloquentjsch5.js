//  CH 5 EXERCISES
//  EVERY AND SOME:
var every = function(array,predicate) {
	predicate ? console.log(true) : console.log(false)
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));

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
