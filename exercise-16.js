/*
Write a program to swap odd and even bits in an integer with as few instructions as possible
(e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, etc).
*/


function swapBits(number) {
  let tmp = 0;
  for(let i = 1; number >= i; i <<= 2) {
    let firstbit = (i & number) << 1;
    let secondbit = ((i<<1) & number) >> 1;
    let base = ~(i << 2);
    tmp |= secondbit & base;
    tmp |= firstbit & base;
  }
  return tmp
}

console.assert(swapBits(5) === 10, 'it should swap bits correctly');
