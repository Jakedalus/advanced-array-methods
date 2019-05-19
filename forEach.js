function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
       
var arr = [1, 2, 3];

forEach(arr, function(num, index, array) {
  console.log(num, index, array);
});


      