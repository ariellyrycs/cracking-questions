/*Design an algorithm and write code to remove the duplicate characters in a string without using any additional bu er NOTE: One or two additional variables are
  ne An extra copy of the array is not
FOLLOW UP
Write the test cases for this method*/


function findDifferentCharacters(str) {
  for(let i = str.length - 1; i >= 0; i -=1) {
    if(str.indexOf(str[i]) !== i) {
      str = str.slice(0, i) + str.slice(i + 1, str.length);
    }
  }
  return str;
}

function findDifferentCharacters(str) {
  let x = {};
  for(let i = str.length - 1; i >= 0; i -=1) {
    if(x[str[i]]) {
      str = str.slice(0, i) + str.slice(i + 1, str.length);
    } else {
      x[str[i]] = true;
    }
  }
  return str;
}


console.assert(findDifferentCharacters('12345') === '12345', 'shoudn\'t be modified');
console.assert(findDifferentCharacters('11345') === '1345', 'should be modified');
