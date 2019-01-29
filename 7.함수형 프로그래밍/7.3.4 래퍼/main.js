function wrap(object, method, wrapper) {
  var fn = object[method];
  console.log(wrapper.apply(this, [fn].concat(Array.prototype.slice.call(arguments))));
  return object[method] = function () {
    return wrapper.apply(this, [fn].concat(
      // return wrapper.apply(this, [fn.bind(this)].concat(
      Array.prototype.slice.call(arguments)
    ));
  }
}

Function.prototype.original = function (value) {
  this.value = value;
  console.log("value : " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function (orig_func, value) {
  this.value = 20;
  orig_func(value);
  console.log("wrapper value : " + this.value);
});






/* 생활코딩 apply강의 */
var obj = new mywrap("도현");

var o1 = {
  val1: 1,
  val2: 2,
  val3: 3,
  sum: sum
};
var o2 = {
  v1: 10,
  v2: 50,
  v3: 100,
  v4: 25,
  sum: sum
};

function sum() {
  var _sum = 0;
  for (name in this) {
    if(typeof this[name] !== 'function'){
      _sum += this[name];
    }
  }
  return _sum;
}

console.log(`sum.apply(o1) => ${sum.apply(o1)}`);
console.log(`sum.apply(o2) => ${sum.apply(o2)}`);
console.log(`o1.sum => ${o1.sum()}`);
console.log(`o2.sum => ${o2.sum()}`);