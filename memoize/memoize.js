function memoize(fn) {
  return function (...args) {
    // TODO :: if we've seen these args before, return the previous result
    return fn(...args);
  };
}

function add(x, y) {
  console.log(`calculating: add(${x}, ${y})`);
  return x + y;
}

const memoAdd = memoize(add);
let result1 = memoAdd(1, 2); // calculate
console.log(result1);
let result2 = memoAdd(1, 2); // use cache
console.log(result1);
