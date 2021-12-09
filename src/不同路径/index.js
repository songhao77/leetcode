/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[ 0 ].length;
  const dp = new Array(rows).fill().map(() => new Array(cols));
  dp[ 0 ][ 0 ] = obstacleGrid[ 0 ][ 0 ] === 0 ? 1 : 0;

  for (let c = 1; c < cols; c++) {
    dp[ 0 ][ c ] = obstacleGrid[ 0 ][ c ] === 1
      ? 0
      : dp[ 0 ][ c - 1 ];
  }

  for (let r = 1; r < rows; r++) {
    dp[ r ][ 0 ] = obstacleGrid[ r ][ 0 ] === 1
      ? 0
      : dp[ r - 1 ][ 0 ];
  }

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[ r ][ c ] = obstacleGrid[ r ][ c ] === 1
        ? 0
        : dp[ r - 1 ][ c ] + dp[ r ][ c - 1 ];
    }
  }
  console.log(dp);

  return dp.pop().pop();
};

// let arr1 = [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ];
// let arr2 = [ [ 0, 1 ], [ 0, 0 ] ];

// console.log(uniquePathsWithObstacles(arr1));
// console.log(uniquePathsWithObstacles(arr2));

module.exports = uniquePathsWithObstacles;