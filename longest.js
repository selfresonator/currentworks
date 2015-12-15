function longestWord(string) {
  var array = string.split(' ');
  var long = ''  // turns string into an array
  for(var i = 0; i < array.length-1; i++) {// goes through array words
    if(array[i].length < array[i + 1].length) { // compares two words
    long = array[i]; // sets the first word to longer string in comparison
    } else {
    long = array[i+1]; // else make the second word the longest, then back through the loop
    }
  }
  return long; // here we return our longest word*/
}


var typical = "asdfkljasdfkj tree dog house family sky shoes horizon longerrrrr sun";
console.log(longestWord(typical));


/*function longestWord(string) {
  var array = string.split(' ');
  var long = ''
  for(var i = 0; i < array.length-1; i++) {
    array[i].length > array[i + 1].length ? long = array[i] : long = array[i+1];
  }
  return long;
}

console.log(longestWord(typical));*/
