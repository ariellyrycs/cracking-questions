//Write a method to decide if two strings are anagrams or not

function isAnagram(str1, str2) {
  let tmpString1 = str1.toLowerCase().replace(/\W/g, '');
  let tmpString2 = str2.toLowerCase().replace(/\W/g, '');
  if(tmpString2.length !== tmpString1.length) {
    return false;
  }
  for(let i = tmpString1.length - 1, f = 0; i >= 0; i -= 1) {
    if(tmpString1[i] !== tmpString2[f]) {
      return false;
    }
    f += 1;
  }
  return true;
}


console.assert(isAnagram('12 34', '4321'), 'should scape any space character');
console.assert(isAnagram('12 as', 'sA 21'), 'should ignore case');
