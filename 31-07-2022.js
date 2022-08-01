//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.



var maxSequence = function(arr){
    let maxSum = -Infinity//comparar cualquier numero con -infinito, -infinito simpre va ser mas chico que cualquier valor ingresado
    let currentSum = 0 //valor  maximo de la suma de elementos del array 
    let negativeNums = 0
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i] < 0){
          negativeNums++
        }
        currentSum = Math.max(arr[i], currentSum + arr[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    if(negativeNums === arr.length || arr.length === 0){
      return 0
    }else if(maxSum !== -Infinity){
      return maxSum
    }
  }

maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])