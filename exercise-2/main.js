'use strict';

// Write a function that adds from two invocations: 
// add(3)(4) // 7

function add(a) {
   return function (b) {
      return a + b;
   };
}

alert(add(5)(6));