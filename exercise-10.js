/*
  You are given two sorted arrays, A and B, and A has a large enough bu er at the end to hold B.
   Write a method to merge B into A in sorted order.
*/


function mergeArraysInOrder(a, b) {
  for(let i = 0, x = 0, len = a.length; i < len; i ++) {
    if(b[x] < a[i]) {
      a.splice(i, 0, b[x]);
      x += 1;
    }
  }
  return a;
}



console.assert(mergeArraysInOrder([1,2,3,5,6,7,8,8,10], [5,5,8,9,10])[10] === 10, 'should merge');
