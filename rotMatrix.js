// Write a function to rotate a 2D square matrix (nested array) counter-clockwise once. The solution should support a square matrix of any size

let matrix =   [[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13,14, 15, 16]];

function rotate(matrix) {
    const newMatrix = [];
    
    let i = 0;
    let j = 0;

    for(let i=0; i<matrix[0].length; i++){
        for(let j=matrix.length-1; j>=0; j--){
            newMatrix[i][j] = matrix[j][i];
            j++;
        }
        i++
    }

    return newMatrix;
}

const rotatedMatrix = rotate(matrix);
console.log(rotatedMatrix);


// should display
[
  [ 4, 8, 12, 16 ],
  [ 3, 7, 11, 15 ],
  [ 2, 6, 10, 14 ],
  [ 1, 5, 9, 13 ]
]