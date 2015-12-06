var listOfNumbers = [23, 45, 2345, 2346, 70291047729];
console.log(listOfNumbers);
console.log(listOfNumbers.length);
console.log(typeof listOfNumbers);
console.log(listOfNumbers.toString);

var mack = [];
mack.push("hella mackin","mackin hella bruh");
mack.push("saltnpepa");
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack.pop());
console.log(mack);




//EXERCISES FROM BOTTOM OF CHAPTER
//THE SUM OF A RANGE
//console.log(sum(range(1,10)));
//write a function for range which returns an array consisting of all of the numbers //from 'start' to 'end'.
var range = function(start,end) { // declares var named range, assigns as anon func,takes 'start' and 'end' params
	var nums = [];               //array to be returned
	for(var i = start; i <= end; i++) { //for every num between start and end, push it to empty nums array
		nums.push(i + 2);
	}
	return nums; //return the nums array
};

var testRange = range(1, 10); //variable assigned to an invocation of the range methodtakes 2 args,1 and 10.
console.log(testRange); //logs testRange to the console

//write a func that returns the sum of all the numbers in an array
var sum = function(array) { //declare the var sum, takes one parameter, 'array'
	arrSum  = 0;			//beginning value to have
	for(var i = 0; i < array.length; i++) { //iterates through each value in the array		// arrSum = array[i] + arrSum;	//adds each value to
	}
	return arrSum;
};

var testSum = sum(testRange); //assigning testSum to an invocation of sum with an arg of our previous testRange method
console.log(testSum);	//console.logging it




//REVERSING AN ARRAY
//
