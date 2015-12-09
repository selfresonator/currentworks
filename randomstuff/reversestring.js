var string = "Happy birthday bitch!! :)"

var reverseString = function(string) {
  var str = string.split('')
  //console.log(str);
  var finStr = [];
  for(i = str.length-1; i >= 0; i--) {
    finStr.push(str[i]);
  }
  return finStr.join('');
};

console.log(reverseString(string));
