function sum(arr) {
  var len = arr.length;
  var i = 0, sum = 0;

  for (; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}

var arr = [1, 2, 3, 4];
console.log(sum(arr));

function mul(arr) {
  var len = arr.length;
  var i = 0, result = 1;
  for (; i < len; i++) {
    result *= arr[i];
  }
  return result;
}

var arr1 = [4, 5, 6, 7];
console.log(mul(arr1));


function reduce(func, arr, memo) {
  var len = arr.length,
    i = 0,
    accum = memo;
  
  for (; i < len; i++) {
    accum = func(accum, arr[i]);
  }

  return accum;
}

var arr2 = [1, 2, 3, 4];

var sum2 = function (x, y) {
  return x + y;
};

var mul2 = function (x, y) {
  return x * y;
};

console.log(reduce(sum2, arr2, 0));
console.log(reduce(mul2, arr2, 1));