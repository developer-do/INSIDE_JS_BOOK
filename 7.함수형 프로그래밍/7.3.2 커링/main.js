/* 7.3.2 커링 */


/* 7-7 예제 */
function calculate(a, b, c) {
  return a * b + c;
}

function curry(func) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(Array.prototype.slice.call(arguments));

  return function () {
    return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
  }
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));

var new_func2 = curry(calculate, 1, 3);
console.log(new_func2(3));

Function.prototype.curry = function () {
  var fn = this, args = Array.prototype.slice.call(arguments);
  return function () {
    return fn.apply(this, args.comcat(Array.prototype.slice.call(arguments)));
  };
};

/* 7=8 예제 */
function calculate1(a, b, c) {
  return a * b + c;
}

function curry2(func) {
  var args = Array.prototype.slice.call(arguments, 1);

  return function () {
    var arg_idx = 0;
    for (var i = 0; i < args.length && arg_idx < arguments.length; i++){
      if (args[i] === undefined) {
        args[i] = arguments[arg_idx++];
      }
      console.log(`i => ${i}`);
      console.log(`arg_idx => ${arg_idx}`);
      console.log(arguments);
    }
    // console.log(arguments);
    return func.apply(null, args);
  }
}

var new_func3 = curry2(calculate, 1, undefined, 4, undefined);
console.log(new_func3(3,5));

