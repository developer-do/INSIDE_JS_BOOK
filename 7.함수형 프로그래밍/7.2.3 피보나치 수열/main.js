/* 7-4 */
var fibo = function () {
  var cache = {
    '0': 0,
    '1': 1
  };

  var func = function (n) {
    if (typeof (cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = func(n - 1) + func(n - 2);
      console.log(n + ". => " + cache[n]);
    }
    return result;
  }
  return func;
}();

console.log(`fibo(3) => ${fibo(3)}`);
console.log(`fibo(10) => ${fibo(10)}`);
console.log(`fibo(20) => ${fibo(20)}`);
console.dir(fibo);
console.dir(fibo);


/* 7-5 */
var cacher = function (cache, func) {
  var calculate = function (n) {
    if (typeof (cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = func(calculate, n);
    }
    return result;
  }
  return calculate;
}

/* 7-6 */
var fact1 = cacher({ '0': 1 }, function (func, n) {
  return n * func(n - 1);
});

var fibo1 = cacher({ '0': 0, '1': 1 }, function (func, n) {
  return func(n - 1) + func(n - 2);
})
console.log(fact1(10));
console.log(fibo1(10));