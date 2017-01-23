require('./main');

//Implement an algorithm to determine if a string has all unique characters What if you can not use additional data structures?
function findDifferentCharacters(str) {
  let uniqueCharacters = [];
  for(let i = str.length; i >= 0; i -= 1) {
    if(uniqueCharacters.indexOf(str[i]) > -1) {
      return false;
    }
    uniqueCharacters.push(str[i]);
  }
  return true;
}
 console.log(findDifferentCharacters('1234567890'));
 console.log(findDifferentCharacters('1234567894'));
