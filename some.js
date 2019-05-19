function some(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      return true;
    }
  }
  
  return false;
}

var arr = [1, 2, 3, 4];

console.log(some(arr, function(v) {
  return v > 2;
})); // true

console.log(some(arr, function(v) {
  return v > 5;
})); // false