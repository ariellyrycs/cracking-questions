//Assume you have a method isSubstring which checks if one word is a substring of another.
//Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).


function areRotationStrings(s1, rotationString) {
  if(s1.length === rotationString.length && (s1 + s1).replace(rotationString, '') ===  s1) {
    return true;
  }
  return false;
}

console.assert(areRotationStrings('1234567890', '6789012345'));
console.assert(areRotationStrings('1234567890', '67890123465') === false);
