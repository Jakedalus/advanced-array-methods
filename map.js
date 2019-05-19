function map(arr, callback) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
}

const arr = [1, 2, 3];

const newArr = map(arr, function(n) {
  return n * 2;
});

console.log(newArr);
