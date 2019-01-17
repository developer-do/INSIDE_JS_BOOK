/* add 함수 생성 (함수표현식 방식) */

// add() 함수 표현식
var add = function (x, y) {
  return x + y;
};

var plus = add;

console.log(add(3, 4));
console.log(plus(5, 6));

var addd = function sum(x, y) {
  return x - y;
};
console.log(addd(3, 4));
// console.log(sum(3, 4));

/* 함수 표현식 방식으로 구현한 팩토리얼 함수 */
var factorialVar = function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorialVar(4));
// console.log(factorial(3));

var func = function () {
  return 42;
};
(function () {
  console.log('function called');
})();