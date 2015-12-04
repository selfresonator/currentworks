// Your code here
var myArray = ['AJ Farley', 'selfres'];

function cutName(string) {
  words = string.split(" ");
  return words;
}

var myData = {
  fullName: cutName,
  skype: myArray[1],
  github: 'selfresonator',
};

console.log(cutName("AJ Farley"));