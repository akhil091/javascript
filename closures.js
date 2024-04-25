//Where and How to use closure concept ?
//Private variables and functions:
const makeCounter = () => {
  let count = 0;
  
  return () => {
    count++;
    console.log(count);
  }
}

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3

function add(x) {
  return function(y) {
    return x + y;
  }
}

let add5 = add(5);
console.log(add5(3)); // 8



var createCounter = function(init) {
  let count = init || 0; // initialize count to 0 or given value

  const increment = function() {
    count++;
    return count;
  };

  const decrement = function() {
    count--;
    return count;
  };

  const reset = function() {
    count = init || 0;
    return count;
  };

  return { increment, decrement, reset };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */



var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

/* For example, when expect(5).toBe(4) is called,
   val is the expect parameter (so val equals 5),
   val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */

