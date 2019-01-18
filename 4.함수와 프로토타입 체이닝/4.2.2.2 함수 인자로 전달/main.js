/* 함수를 다른 함수의 인자로 넘긴 코드 */

// 함수 표현식으로 foo() 함수 생성
var foo = function (func) {
  func();
}

foo(function () {
  console.log('Function can be used as the argument.');
});