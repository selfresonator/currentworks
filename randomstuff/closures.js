/* CLOSURES BITCHESSSSSSS */

function stuffer(stuff) {
  function stuffThis(holder) {
    return 'i put ' + stuff + ' inside a ' + holder + '.';
  }
  return stuffThis;
}

var blueStuff = stuffer('Blue Stuff');

console.log(stuffer('Blue Stuff')('blackest hole')); // -->i put Blue Stuff inside a blackest hole.
console.log(blueStuff('even blacker hole')); // -->i put Blue Stuff inside a even blacker hole.
