function filter(arr, callback) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) newArr.push(arr[i]);
  }
  
  return newArr;
}

var arr = [1, 2, 3, 4];

var newArr = filter(arr, function(v) {
  return v > 2;
});

console.log(newArr);

