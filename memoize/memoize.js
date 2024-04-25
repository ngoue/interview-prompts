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
console.log(memoAdd(1, 2)); // calculate
console.log(memoAdd(1, 2)); // use cache
