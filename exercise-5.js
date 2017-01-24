

/**
  @param {Array.<Array<String>>} image
  return Array.<Array<String>>
  this function rotate a reprecentation of an image
*/
function rotateImage(image) {
  let yLength = image[0].length;
  let rotation = new Array(yLength);
  for(let x = image.length - 1; x >= 0; x -= 1) {
    for(let y = 0; yLength > y; y += 1) {
      rotation[y] = rotation[y] || [];
      rotation[y].push(image[x][y])
    }
  }
  return rotation;
}

// =====
let image = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p']
];

let result = [
  ['m', 'i', 'e', 'a'],
  ['n', 'j', 'f', 'b'],
  ['o', 'k', 'g', 'c'],
  ['p', 'l', 'h', 'd']
];

console.assert(rotateImage(image)[0][0] === result[0][0], 'Should rotate correctly');
console.assert(rotateImage(image)[3][3] === result[3][3], 'Should rotate correctly');
console.assert(rotateImage(image)[3][0] === result[3][0], 'Should rotate correctly');
console.assert(rotateImage(image)[0][3] === result[0][3], 'Should rotate correctly');
