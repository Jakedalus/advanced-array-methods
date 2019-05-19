function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};
       
var arr = [1, 2, 3];

forEach(arr, function(num, index, array) {
  console.log(num, index, array);
});


/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(num) {
        newArr.push(num*2);
    });
    
    return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(n) {
        if (n % 2 === 0) newArr.push(n);
    })
    
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    console.log(arr);
    let newArr = [];
    arr.forEach(function(str, i) {
        var chars = str.slice();
        newArr.push(chars[0] + chars[chars.length-1]);
    });
    
    console.log(newArr);
    
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach(function(obj, i) {
        newArr.push(obj);
        newArr[i][key] = value; 
    })
    
    
    return newArr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   let arr = str.split("");
   let vowels = {};
    arr.forEach(function(c) {
        console.log(c);
        if (c.toLowerCase() === 'a' ||
            c.toLowerCase() === 'e' ||
            c.toLowerCase() === 'i' ||
            c.toLowerCase() === 'o' ||
            c.toLowerCase() === 'u') {
                if (vowels.hasOwnProperty(c)) {
                    vowels[c]++;
                } else {
                    vowels[c] = 1;
                }
            }
    })
    
    console.log(JSON.stringify(vowels));
    return vowels;
}

      