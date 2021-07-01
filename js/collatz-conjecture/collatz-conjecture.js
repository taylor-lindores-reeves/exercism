//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  // Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
  // odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
  // The conjecture states that no matter which number you start with, you will
  // always reach 1 eventually.

  let count = 0;

  if (n > 0) {
    for (count; n > 1; count++) {
      if (n % 2 === 0) {
        n = n / 2;
      } else if (n % 2 !== 0) {
        n = 3 * n + 1;
      }
    }
  } else if (n == 0) {
    throw new Error("Only positive numbers are allowed");
  } else {
    throw new Error("Only positive numbers are allowed");
  }

  return count;
};
