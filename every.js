function every(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i , arr)) {
      return false;
    }
  }
  
  return true;
}

function isAllEven(arr) {
  return arr.every(function(v) {
    return v % 2 === 0;
  });
}

console.log('[1, 2, 3]:', isAllEven([1, 2, 3]));
console.log('[2, 6, 10]:', isAllEven([2, 6, 10]));
