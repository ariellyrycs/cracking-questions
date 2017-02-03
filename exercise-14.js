/*
Given an integer, print the next smallest and next largest number that have the same number of 1 bits in their binary representation.
*/

function printLargestAndSmallest(number) {
  let numberOfBits = 0,
    numberOfOneBits = 0;
  let a = 1;
  for(let k = number; k != 0; k >>= 1) {
    numberOfOneBits += k&1;
    numberOfBits += 1;
  }
  a <<= numberOfOneBits;
  a -= 1;
  let b = a << (numberOfBits - numberOfOneBits);
  console.log(a, b);
}


console.log(printLargestAndSmallest(13), 'it should print 7 14 for 111 for the smallest and 1110 for the largest, because it has 3 1bits');
