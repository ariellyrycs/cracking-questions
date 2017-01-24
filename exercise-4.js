//Write a method to replace all spaces in a string with ‘%20’.
function replaceURISpaces(str) {
  return str.split('%20').join(' ');
}

function replaceURISpaces(str) {
  return str.replace(/\%20/g, ' ');
}

function replaceURISpaces(str) {
  for(let i = 0; str.length > i; i += 1) {
    if(str[i] === '%' && str[i + 1] === '2' && str[i + 2] === '0') {
      str = str.substr(0, i) + ' ' + str.substr(i + 3, str.length);
    }
  }
  return str;
}

console.assert(replaceURISpaces('123123%20123123') === '123123 123123', 'should replace %20');
