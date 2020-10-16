// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//memoize will reduce redudant calls by storing precomputed values to use instead, takes in a function as a parameter
function memoize(fn) {
  //will store the precomputed values
  const cache = {};

  return (...args) => {
    //if this function is called with that particulate argument we'll return the cached value
    if (cache[args]) return cache[args];

    //otherwise we'll call the 'fn' function with the provided argument(s)
    const result = fn.apply(this, args);
    //then store that in the cache object ready to be used
    cache[args] = result;

    return result;
  };
}

/*****Fibonacci sequence using a recursive solution with memoization*****/
function slowFib(n) {
  //once we get down to this value we'll start returning the numbers
  if (n < 2) return n;
  //we call the 'memoized' version of 'slowFib
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

/*****Fibonacci sequence using an iterative solution*****/
// function fib(n) {
//     //starting values will be used to add the first number in fib sequence
//     let result = [0, 1];
//     //we start the loop at 2 since we already have the first two numbers in the array
//     for (let i = 2; i <= n; i++) {
//       //get the number behind us
//       const a = result[i - 1];
//       //get the number that is two elements behind us
//       const b = result[i - 2];
//       //add them for the fibonacci sequence
//       result.push(a + b);
//     }
//     //return the result at the 'nth' index which will always be the last value in the array (result.length -1)
//     return result[n];
//   }
