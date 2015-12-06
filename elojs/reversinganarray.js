function reverseArray(array) {
  var newArr = [];
	for (i = array.length-1; i >= 0; i--) {
    newArr.push(array[i]);
	}
  return newArr;
};

var testArr = [24,631,4,49025];
console.log(reverseArray(testArr));
