//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
 function clearMatrixRow(matrix) {
   for(let i = matrix.length - 1; i >= 0; i -= 1) {
     if(matrix[i].indexOf('0') !== -1) {
       matrix[i] = (new Array(matrix[i].length)).fill('0');
     }
   }
   return matrix;
 }


 // =====
 let image = [
   ['1', '2', '3', '4'],
   ['5', '6', '7', '8'],
   ['0', '1', '2', 'l'],
   ['m', 'n', 'o', 'p']
 ];

 let result = [
   ['1', '2', '3', '4'],
   ['5', '6', '7', '8'],
   ['0', '0', '0', '0'],
   ['m', 'n', 'o', 'p']
 ];


console.assert(clearMatrixRow(image)[2][1] === result[2][1], 'should get 0s rows');
