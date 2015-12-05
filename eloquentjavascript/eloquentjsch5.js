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
var reduce = function(array,combine) {
	return combine(array);
};

nums = [[3,45,724],[695,45],[33,2,514],[684,55,90],[64,3]];

console.log(reduce(nums,function(array) {
	var newArr = [];
	for(var i = 0; i < array.length; i++) {
		newArr.push(array[i]);
	}
	return newArr;
}));
