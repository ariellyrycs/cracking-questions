
//Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?
function findDifferentCharacters(str) {
  let uniqueCharacters = [];
  for(let i = str.length - 1; i >= 0; i -= 1) {
    if(uniqueCharacters.indexOf(str[i]) > -1) {
      return false;
    }
    uniqueCharacters.push(str[i]);
  }
  return true;
}
 console.assert(findDifferentCharacters('1234567890'), 'should be able to check unique characters in a string');
 console.assert(findDifferentCharacters('1234567894') == false, 'should be able to detect no unique character in a string');
