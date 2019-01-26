/* 예제 7-3-1 */
function fact0(num) {
  var val = 1;
  for (var i = 2; i <= num; i++) {
    val = val * i;
  }
  return val;
}

console.log(`fact0(10) = ${fact0(10)}`);
console.log(`fact0(20) = ${fact0(20)}`);

/* 예제 7-3-2 */
function fact1(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fact1(num - 1);
  }
}

console.log(`fact1(10) = ${fact1(10)}`);
console.log(`fact1(20) = ${fact1(20)}`);

/* 7-3-3 ~~!! memoization pattern !!~~ */

var fact2 = function () {
  var cache = { '0': 1 };
  var func = function (n) {
    var result = 0;

    if (typeof (cache[n]) === 'number') {
      result = cache[n];
    } else {
      result = cache[n] = n * func(n - 1);
      console.log(`${n - 1}.result => ${result}`);
    }

    return result;
  }
  return func;
}();

console.log(`fact2(10) = ${fact2(10)}`);
console.log(`fact2(20) = ${fact2(20)}`);
console.dir(fact2(10));


/* 메모이제이션 패턴 예제 */

function Calculate(key, input, func) {
  Calculate.data = Calculate.data || {};

  if (!Calculate.data[key]) {
    var result;
    result = func(input);
    Calculate.data[key] = result;
  }

  return Calculate.data[key];
}

var result = Calculate(1, 5, function (input) {
  return input * input;
});

console.log(result);

result = Calculate(2, 5, function (input) {
  return input * input / 4;
});

console.log(result);
console.log(Calculate(1));
console.log(Calculate(2));
console.dir(Calculate.data[1] === Calculate(1));

Function.prototype.memoization = function (key) {
  var arg = Array.prototype.slice.call(arguments, 1);
  this.data = this.data || {};

  return this.data[key] !== undefined ? this.data[key] : this.data[key] = this.apply(this, arg);
};

function myCalculate1(input) {
  return input * input;
}

function myCalculate2(input) {
  return input * input / 4;
}

myCalculate1.memoization(1, 5);
myCalculate1.memoization(2, 4);
myCalculate2.memoization(1, 6);
myCalculate2.memoization(2, 7);


console.log(myCalculate1.memoization(1));
console.log(myCalculate1.memoization(2));
console.log(myCalculate2.memoization(1));
console.log(myCalculate2.memoization(2));
console.dir(myCalculate1);
console.dir(myCalculate2);

