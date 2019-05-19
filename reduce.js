function reduce (arr, callback, initial) {
  var acc = initial ? initial : arr[0];
//  console.log("Initial:", acc, typeof acc, Array.isArray(acc));
  for(var i = typeof acc === 'object' ? 0 : 1; i < arr.length; i++) {
//    console.log(acc, " + ", arr[i]);
    acc = callback(acc, arr[i], i, arr);
//    console.log("New Accumulator:", acc);
  }
  return acc;
}

console.log(reduce([1,2,3,4], function(acc, next) {
  return acc + next;
}));

console.log(reduce(['Combine', 'these', 'strings together'], function(acc, next) {
  return acc + ' ' + next;
}));

console.log(reduce([5, 4, 4, 1, 5], function(acc, next) {
  if (acc.hasOwnProperty(next)) {
    acc[next]++;
  } else {
    acc[next] = 1;
  }
  return acc;
}, {}));

console.log(reduce([{first: 'Jake', last: 'Crapernterasd'}, {first: 'Joe', last: 'Doe'}], function(acc, next) {
//  console.log("acc:", acc, Array.isArray(acc), next);
  acc.push(next.first + ' ' + next.last);
//  console.log(acc);
  return acc;
}, []));