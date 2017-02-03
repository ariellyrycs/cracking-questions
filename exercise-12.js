/*
Write a function to determine the number of bits required to convert integer A to integer B.
Input: 31, 14
Output: 2
*/
function countBitDiff(a, b) {
  let count = 0;
  for(let c = a^b; c != 0; c >>= 1) {
    count += c&1
  }
  return count;

}


console.assert(countBitDiff(31, 14) === 2, 'Should count bit differences');
